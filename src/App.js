import { useEffect, useState } from 'react'
import './App.css'
import './utilStyle.css'
import Card from './Card'

function App () {
  const [vaccineData, setVaccineData] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [phases, setPhases] = useState([]);  
  let id = 1;
  const cards = vaccineData.map(data => {
    return (
      <Card
        key={id++}
        title={data.candidate}  
        phase={data.trialPhase}
        details={data.details}
        contentTitle={data.candidate}
        mechanism={data.mechanism}
        sponsors={data.sponsors}
        institutions={data.institutions}
        handleCardOpen={handleCardOpen}
      />
    )
  })
  const options = phases.map(data => {
    return (
      <option key={data.phase} value={`${data.phase}`}>
        {data.phase}
      </option>
    )
  })

  function handleSelection(event) {
    const value = event.target.value
    const vaccines = JSON.parse(localStorage.getItem("vaccineData"))
    if (value !== "all") {
      const filtered = vaccines.filter(data => data.trialPhase === value)
      setVaccineData(filtered)
    } else {
      setVaccineData(vaccines)
    }
  }

  useEffect(() => {
    async function getvaccineData () {
      const getVaccines = await fetch('https://disease.sh/v3/covid-19/vaccine')

      const vaccines = await getVaccines.json()
      if (vaccines) {
        setPhases(vaccines.phases)
        setVaccineData(vaccines.data)
        localStorage.setItem("vaccineData", JSON.stringify(vaccines.data))
      }
    }
    getvaccineData()
  }, [])

  function handleCardOpen() {
    setIsCardOpen(!isCardOpen)
  }

  return (
    <div className='App'>
     { 
      isCardOpen && <div className='shade'></div>
     }
      <header className='App-header'>
        <h2>Covid 19 Vaccines</h2>
        <p>
          Data provided by:{' '}
          <a href='https://disease.sh/docs/' rel='noreferrer' target='_blank'>
            disease.sh
          </a>{' '}
          An open API for disease-related statistics
        </p>
      </header>
      <main>
        <div className='selection-container'>
          <div className='flex gap-sm flex-center'>
          <p>Category: </p>
          <select onChange={handleSelection} className='p-sm'>
            <option value="all">All</option>
            {options}
          </select>
         </div>
        </div>
          <div className='cards-container'>
            {cards}
          </div>
      </main>
      <footer>
        <p>Created by: Darwin</p>
      </footer>
    </div>
  )
}

export default App

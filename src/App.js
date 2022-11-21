import { useEffect, useState } from 'react'
import './App.css'
import './utilStyle.css'
import Card from './Card'

function App () {
  const [vaccineData, setVaccineData] = useState([])
  const [isCardOpen, setIsCardOpen] = useState(false);
  let id = 1;
  const cards = vaccineData.map(data => {
    
    return (
      <Card
        key={id++}
        title={data.candidate}  
        phase={data.trialPhase}
        details={data.details}
        contentTitle={data.candidate}
        handleCardOpen={handleCardOpen}
      />
    )
  })

  useEffect(() => {
    async function getvaccineData () {
      const getVaccines = await fetch('https://disease.sh/v3/covid-19/vaccine')

      const vaccines = await getVaccines.json()
      if (vaccines) {
        setVaccineData(vaccines.data)
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
      <main >
        <div className='cards-container flex flex-column flex-center gap-md'>
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

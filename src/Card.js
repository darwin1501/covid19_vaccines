/* eslint-disable default-case */
import React, { useState } from 'react'
import closeIcon from './icons/close.svg'

export default function Card (props) {
  const {
    details,
    handleCardOpen,
    institutions,
    mechanism,
    phase,
    sponsors,
    title
  } = props
  const [isClicked, setIsClicked] = useState(false)

  function handleClick () {
    setIsClicked(!isClicked)
  }

  function bgSetter (phase) {
    switch (phase) {
      case 'Phase 3':
        return '#c2f8c5'
      case 'Phase 2/3':
        return '#c0f0eb'
      case 'Phase 2':
        return '#d9caff'
      case 'Phase 1/2':
        return '#f0c7d0'
      case 'Phase 1':
        return '#f4ceab'
      case 'Pre-clinical':
        return '#fff3ac'
    }
  }
  console.log(bgSetter(phase))
  return (
    <>
      <div
        className='card'
        onClick={() => {
          handleClick()
          handleCardOpen()
        }}
        style={{ backgroundColor: bgSetter(phase) }}
      >
        <p className='card-title'>{title}</p>
        <p className='card-subtitle'>{phase}</p>
      </div>
      {isClicked && (
        <div className='card-content'>
          <div></div>
          <button
            className='card-close'
            onClick={() => {
              handleClick()
              handleCardOpen()
            }}
          >
            <img className='close-icon' src={closeIcon} alt='close' />
          </button>
          <div className='card-details-container'>
            <h2 className='text-center'>{props.contentTitle}</h2>
            <p className='card-details'>
              <strong>Sponsors: </strong>
              {sponsors}
            </p>
            <p className='card-details'>
              <strong>Mechanism: </strong>
              {mechanism}
            </p>
            <p className='card-details'>
              <strong>Institutions: </strong>
              {institutions}
            </p>
            <p className='card-details'>
              <strong>Details: </strong>
              {details}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

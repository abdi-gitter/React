import React from 'react'
// when importing a module, you can name it whatever you want
import styleAhmed from './styleAhmed.module.css'
import './styleAhmed.css'
// import './ahmed.scss'
export default function Ahmed() {
  return (
    <div id="ahmed">
      <h1>
        Hello Friends From Germany
      </h1>

      <p className='dev'>
        Full stack developers
      </p>

      <p className={styleAhmed.year}>
        Year 2023-2024
      </p>
    </div>
  )
}

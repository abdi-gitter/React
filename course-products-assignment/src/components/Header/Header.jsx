import React from 'react'

import './Header.scss'
export default function Header() {
  return (
    <div>
        <div>
            <h1>
                Our Big Market
            </h1>
        </div>
        <div>
            <button className='all'>
                All
            </button>
            <button className='Smatphone'>
                Smatphone
            </button>
            <button className='Laptop'>
                Laptop
            </button>
            <button className='fragrances'>
            fragrances
            </button>
        </div>
    </div>
  )
}

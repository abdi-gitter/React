import React from 'react'

    
export default function Card({ title, price, description}) {
  return (
        <div className="cards">
            <div className="title">
                <h1>{title}</h1>
            </div>
            
            <div className="price">
                <h1>{price}</h1>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
  )
}

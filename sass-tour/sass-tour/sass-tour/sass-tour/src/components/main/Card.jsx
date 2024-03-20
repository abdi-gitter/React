import React from 'react'

export default function Card({title, desc, image}) {
  return (
    <div className="card">
        <div className="title">
            <h1>{title}</h1>
        </div>
        
        <img src={image} alt="" />

        <div className="desc">
            <p>{desc}</p>
        </div>
    </div>
  )
}

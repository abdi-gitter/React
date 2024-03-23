import React from 'react'

export default function Input({handleChange, val}) {
  return (
    <div>
        <input 
            value={val}
            type="text" 
            onChange={(e)=>handleChange(e.target.value)}
        />
    </div>
  )
}

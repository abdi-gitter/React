import React from 'react'
import './MyComponent.css'

// This component was made just for the sake of demonstrating 
// how CSS is not scoped to components by default.

// This component is changing the background color of the entire page.
// EVEN THOUGH WE ARENT EVEN RENDERING IT!
// We are importing our CSS file, and it is being applied to the entire page.
// This is because CSS is scoped to the entire page by default.

export default function MyComponent() {
  return (
    <div>MyComponent</div>
  )
}

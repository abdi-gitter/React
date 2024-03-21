import './App.css';
import {useState} from 'react'
import Button from './Button'
import Count from './Count'

function App() {

  const [count, setCount] = useState(0)

  // I'm just using the event and the method to show multiple ways we can get data from this component
  const handleClick = (e,method)=>{

    console.log(`'method:' ${e.target.innerText}`)

    if(method === "+"){
      setCount((prevCount)=>prevCount+1)
    } else {
      setCount((prevCount)=>prevCount-1)
    } 
  }

  return (
    <div className="App">
      <Button method="+" handleClick={handleClick}/>
      <Count count={count}/>
      <Button method="-" handleClick={handleClick}/>
    </div>
  );
}

export default App;
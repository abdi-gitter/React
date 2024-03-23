import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';


function App() {
  // I want the state to live here, and I want to pass 
  // the state down to the child component
  // I want another child component to update the state
  
  const [state, setState] = useState("");
  const [secondState, setSecondState] = useState("")

  const updateState = (value) => {
    setState(value)
  }


  return (
    <div className="App">
      {/* component with an input element that updates the state */}
      <Input handleChange={updateState} val={state}/>
      {/* component with an H1 element to display the state */}
      <Output output={state}/>
    </div>
  );
}

export default App;

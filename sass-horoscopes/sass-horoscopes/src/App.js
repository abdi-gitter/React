import './App.css';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import {useState} from 'react'

function App() {

  let [input, setInput] = useState('')
  let [selectedSigns, setSelectedSigns] = useState([])

  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <Header />

      {/* Input */}
      <div className="input">
        {/* controlled component: */}
        <input type="text" value={input} onInput={(e)=>{setInput(e.target.value)}}/>
      </div>
      
      {/* MAIN */}
      <Main input={input} selectedSigns={selectedSigns}/>
    </div>
  );
}

export default App;
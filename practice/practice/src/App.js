import Chase from './components/chase/Chase';
import Ahmed from './components/ahmed/Ahmed';
import Kenny from './components/kenny/Kenny';
import Gulnar from './components/gulnar/Gulnar';
import Ibrahim from './components/Ibrahim/Ibrahim';

function App() {
  /* 
    - External CSS
    - Inline CSS
    - SASS
    - CSS Module
    - Set one style conditionally
  */

  return (
    <div className="App">
      <Chase value={true}/>
      <Ahmed value={true}/>
      <Kenny value={true}/>
      <Gulnar border={true}/>
      <Ibrahim />
    </div>


  );
}

export default App;

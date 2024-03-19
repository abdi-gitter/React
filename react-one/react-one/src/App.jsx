import logo from './logo.svg';
import './App.css';

const arr = [{
  name: 'John',
  age: 25
}, {
  name: 'Jane',
  age: 24
}, {
  name: 'Tom',
  age: 26
}, {
  name: 'Jerry',
  age: 23}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item.name} {item.age}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

import Main from './components/main/Main'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

function App() {
  return (
    <div className="App">
      {/* make a component to consume array of places,
       and render another component for each place. */}
       {/* Main/Card */}
       <Nav />
       <Header />
       <Main />
    </div>
  );
}

export default App;

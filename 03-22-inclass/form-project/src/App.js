import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';

// This is the component that will render all of the houses:
import List from './components/List';

function App() {

  const [houses, setHouses] = useState([]);
  const [showForm, setShowForm] = useState(false);


  // if they click add, we need to show the form:
  const handleOpen = ()=>setShowForm(true);
  // if we need to close the form, we need to set this to false:
  const handleClose = ()=>setShowForm(false);

  const addHouse = (house)=>{
    const newHouses = [...houses]
    // unshift adds an element to the beginning of an array
    newHouses.unshift(house)
    setHouses(newHouses)
  }

  const removeHouse = (id)=>{
    let newHouses = [...houses]
    newHouses = newHouses.filter(house=>house.id !== id)
    setHouses(newHouses)
  }

  return (
    <div>
        {/* Header - needs to have add button to display form modal*/}
        <Header handleOpen={handleOpen}/>

        {/* List of houses is going to need all state for houses 
          as well as a reference to our removeHouse function*/}
        <List houses={houses} removeHouse={removeHouse}/>

        {/* Add form */}
        <AddForm showForm={showForm} handleClose={handleClose} addHouse={addHouse}/>
    </div>
  );
};

export default App;
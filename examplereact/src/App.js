import React, { useState } from 'react';
import './App.css'; // Make sure to have your CSS styles defined here

// Define the UserComponent directly in the same file
function UserComponent({ firstName, lastName, favoriteColor }) {
  return (
    <div className="user-info">
      <h1 className="user-name">Name: {firstName} {lastName}</h1>
      <p className="favorite-color" style={{ color: favoriteColor }}>
        Favorite Color: {favoriteColor}
      </p>
    </div>
  );
}

function App() {
  const [users] = useState([
    { id: 1, fname: "Chase", lname: "Lones", fc: "blue" },
    { id: 2, fname: "Gulnar", lname: "Hasan-zada", fc: "green" },
    { id: 3, fname: "Abdisa", lname: "Bedada", fc: "yellow" },
    { id: 4, fname: "Ahmed", lname: "Ben Smida", fc: "blue" },
    { id: 5, fname: "Birsen", lname: "Bahsi", fc: "green" },
    { id: 6, fname: "Kenneth", lname: "Acquah", fc: "orange" },
    { id: 7, fname: "Ibrahim", lname: "Jouida", fc: "red" },
  ]);

  return (
    <div className="user-list">
      {users.map(user => (
        <UserComponent
          key={user.id}
          firstName={user.fname}
          lastName={user.lname}
          favoriteColor={user.fc}
        />
      ))}
    </div>
  );
}

export default App;

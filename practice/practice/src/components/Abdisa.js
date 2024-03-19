import React from 'react';
import './Abdi.css'; // Importing global styles
import styles from './Abdi.module.css'; // Importing CSS Module
import './Abdi.scss'; 

function Abdi() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello from Abdi</h1>
      <p className="description">This is a styled component</p> {/* Sass styles */}
    </div>
  );
}

export default Abdi;

import React from 'react'
// importing CSS:
import './Chase.css'
// importing SASS:
import './Chase.scss'
// importing CSS Module:
import moduleStyles from './Chase.module.css'

// boolean in props to conditionally apply style:
export default function Chase({value}) {

    // creating a style object:
    const styles = {
        h3:{
            color: "skyblue",
            fontSize: "20px",
            backgroundColor: "green",
            width: '50%',
            margin: 'auto',
            textAlign: 'center',
            borderRadius: '10px'
        }
    }

  return (
    // ID being used in SCSS
    <div id="chase">
        {/* 
            - External CSS *
            - Inline CSS *
            - SASS *
            - CSS Module *
            - Set one style conditionally *
        */}

        {/* ID being used in CSS */}
        <h1 id="name">Chase</h1>

{/* conditional inline styles from style object */}
        <h3 style = {value?styles.h3:{backgroundColor:'magenta', color: 'aqua'}}>Davis, CA</h3>
        {/* CSS Module */}
        <h3 className = {moduleStyles.class}>Full Stack JavaScript</h3>
    </div>
  )
}

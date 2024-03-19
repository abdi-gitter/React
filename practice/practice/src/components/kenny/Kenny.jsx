import React from 'react'
import './kenny.css'

export default function Kenny(){
    const styles = {
        width: '200px',
        backgroundColor: '#7FFFD4',
    }

    return (
        <div id="kenny">
            <h1 id="name">Kenny</h1>
            <p>Full Stack Developer</p>
            <p style={styles}>Year 2023-2024</p>
        </div>
    )
}
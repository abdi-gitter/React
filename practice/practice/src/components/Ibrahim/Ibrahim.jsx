import react from 'react'
// importing CSS:
import './ibrahim.css'

// importing a module:
import iModule from './ibrahim.module.css'
// This ends up being an object with properties that are class names 
// and values that are unique to the class names
// {Dev: "ibrahim_module__Dev___1e2e3"}

export default function Ibrahim() {

    return (
        <div id="ibrahim">

            <h1 id="nameibrahim">Ibrahim</h1>

            <p className = {iModule.class}>
                Web Developer
            </p>
        </div>
    )
}
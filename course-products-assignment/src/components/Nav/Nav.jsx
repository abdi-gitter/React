import React from 'react'
import './Nav.scss';

export default function Nav() {
  return (
    <div className="navbar">
        <div className="text">
            <h1>Market</h1>
        </div>
        <div className="links">
                  <a className="Link"  href="#">Customer Care</a>
                   <a className="Link"  href="#">Becomes a Seller</a>
                   <a className="Link"  href="#">Download APP</a>   
                   <a className="Link"  href="#">Login</a>
                   <a className="Link"  href="#">About us</a>
        </div>
    </div>
  )
}

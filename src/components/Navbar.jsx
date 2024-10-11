import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className='container'>
    <div className="logo">
         <img src="/Images/brand_logo.png" alt="logo" />
    </div>

    <ul>
         <li href="#">Menu</li>
         <li href="#">Location</li>
         <li href="#">About</li>
         <li href="#">Contact</li>
    </ul>

    <button>Login</button>
    </nav>
    </div>
  )
}

export default Navbar;

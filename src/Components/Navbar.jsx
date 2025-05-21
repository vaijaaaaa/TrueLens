import React from 'react'




function Navbar() {
  return (
   <nav>
    <ul>
        <li>
            <NavLink to= "/"/>Home<NavLink/>
        </li>
        <li>
            <NavLink to = "/about">About</NavLink>
        </li>
        <li>
            <NavLink to = "/contact">Contact</NavLink>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
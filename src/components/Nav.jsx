import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
  const [show,setShow]=useState(false)
  useEffect(()=>
  window.addEventListener("scroll",()=>
  {
    if(window.scrollY>600)
    {
      setShow(true)
    }
    else
    {
      setShow(false)
    }
  })
  )
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img width={'150px'} src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="netflix.logo" />
    </div>
  )
}

export default Nav
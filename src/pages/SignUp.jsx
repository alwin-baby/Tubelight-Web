import React from 'react'
import Heading from '../components/headerBar/Heading'
import Login from '../components/headerBar/Login'
import Welcome from '../components/body/Welcome'


function signUp() {
  return (
    <form>
    <nav className='nav1'>
        <Heading/>
        <Login/>
    </nav>    
        <Welcome/>
    </form>
  )
}

export default signUp
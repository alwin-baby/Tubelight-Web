import React from 'react'
import Heading from '../components/headerBar/Heading'
import LoginButton from '../components/headerBar/LoginButton'
import Welcome from '../components/body/Welcome'



function signUp() {
  return (
    <form>
    <nav className='nav1'>
        <Heading/>
        <LoginButton/>
    </nav>    
        <Welcome/>
    </form>
  )
}

export default signUp
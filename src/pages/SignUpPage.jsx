import React from 'react'
import Heading from '../components/headerBar/Heading'
import LoginButton from '../components/headerBar/LoginButton'
import SignupPageBody from '../components/body/SignupPageBody'


function signUpPage() {
  return (
    <form>
      <nav className='nav1'>
        <Heading/>
        <LoginButton/>
      </nav>    
        <SignupPageBody/>
    </form>
  )
}

export default signUpPage
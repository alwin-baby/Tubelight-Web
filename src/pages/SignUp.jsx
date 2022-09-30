import React from 'react'
import Heading from '../components/headerBar/Heading'
import Login from '../components/headerBar/Login'
import Welcome from '../components/body/Welcome'

function signUp() {
  return (
    <>
    <header>
        <Heading/>
        <Login/>
    </header>    
        <Welcome/>
    </>
  )
}

export default signUp
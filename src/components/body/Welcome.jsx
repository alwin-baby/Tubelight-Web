import React from 'react'
// eslint-disable-next-line
import style from './style.css'

function Welcome() {
  return (
    <form className='fbox'>
      <p className='welcome'>Welcome !</p>
      <table className='tbox'>
        
        <tr>
        <label>Name</label>
        <input type="text" placeholder='Enter your full name'></input>
        </tr>

        <tr>
        <label>Email</label>
        <input type="text" placeholder='Enter your email'></input>
        </tr>

        <tr>
        <label>UserName</label>
        <input type="text" placeholder='Enter your user name'></input>
        </tr>

        <tr>
        <label>Password</label>
        <input type="text" placeholder='Enter your Password'></input>
        </tr>

        <tr>
        <label>Confirm Password</label>
        <input type="text" placeholder='Confrim your Password'></input>
        </tr>
        <button>Signup</button>
        <span className="form-input-login">Already have an account ? <a href>Login</a></span>
        </table>
    </form>
  )
}

export default Welcome
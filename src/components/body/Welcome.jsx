import React from 'react'
// eslint-disable-next-line
import style from './style.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






function Welcome() {
  return (
    <form className='fbox'>
      
      <table className='tbox'>
      
      <p className='welcome'>Welcome !</p>
        <tr>
        <label className='fname'>Name</label>
        <br></br><br></br>
        <input type="text" placeholder='Enter your full name' className='iname'></input>
        </tr>

        <tr>
        <br></br> 
        <label className='fname'>Email</label>
        <br></br> <br></br> 
        <input type="text" placeholder='Enter your email' className='iname'></input>
        </tr>

        <tr>
        <br></br> 
        <label className='fname'>UserName</label>
        <br></br><br></br> 
        <input type="text" placeholder='Enter your user name' className='iname'></input>
        </tr>

        <tr>
        <br></br> 
        <label className='fname'>Password</label>
        <br></br><br></br> 
        <input type="password" placeholder='Enter your Password' className='iname' ></input>
        </tr>

        <tr>
        <br></br> 
        <label className='fname'>Confirm Password</label>
        <br></br><br></br> 
        <input type="password" placeholder='Confrim your Password' className='iname' ></input>
        </tr>

        <br></br>
        <br></br> 
        <button className='signup'>Signup</button>
        <br></br>
        
        <p className="Already">Already have an account ? <a className='login' href >Login</a> </p>
        </table>
    </form>
  )
}

export default Welcome
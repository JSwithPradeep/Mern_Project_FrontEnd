import React from 'react'

const Signup = () => {
    return (
        <div className='sign-up'>
          <h1>SignUp</h1>
          <input className='inputBox' type='text'placeholder='Enter Name' />
    
          <input className='inputBox' type='text' placeholder='Enter Email' />
    
          <input className='inputBox' type='password' placeholder='Enter Password' />
    
          <button  className='appButton' type='button'>SignUp</button>
        </div>
      )
    }
export default Signup
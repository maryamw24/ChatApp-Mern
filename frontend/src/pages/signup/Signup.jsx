import React from 'react'
import GenderRadioBtn from './GenderRadioBtn'

const SignUp = () => {
  return (
    
      <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className= 'w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>Sign Up
        <span className='text-blue-700' > ChitChat</span>
        </h1>

        <form>
        <div>
            <label className = 'label p-2'>
              <span className = 'label-text text-sm'>Full Name</span>
            </label>
            <input type='text' placeholder='eg. Maryam Waseem' className='w-full input input-bordered h-10 bg-gray-900 text-sm' />
          </div>

          <div>
            <label className = 'label p-2'>
              <span className = 'label-text text-sm'>Username</span>
            </label>
            <input type='text' placeholder='eg. maryam_w' className='w-full input input-bordered h-10 bg-gray-900 text-sm' />
          </div>

          <div>
            <label className = 'label p-2'>
              <span className = 'label-text text-sm'>Password</span>
            </label>
            <input type='password' placeholder='Enter password (atleast 6 characters)' className='w-full input input-bordered h-10  bg-gray-900 text-sm' />
          </div>

          <div>
            <label className = 'label p-2'>
              <span className = 'label-text text-sm'>Password</span>
            </label>
            <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10  bg-gray-900 text-sm' />
          </div>

          <GenderRadioBtn />

          <span className='text-sm mt-1'>Already have an account? </span>
          <a href='#' className = 'text-sm hover:underline hover:text-blue-800 mt-2 inline-block text-center'>Login here
          </a>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-4 bg-blue-900 hover:bg-blue-800'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

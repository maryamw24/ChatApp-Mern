import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className= 'w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
        <span className='text-blue-700' > ChitChat</span>
        </h1>

        <form>
          <div>
            <label className = 'label p-2'>
              <span className = 'text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10 bg-gray-900' />
          </div>

          <div>
            <label className = 'label p-2'>
              <span className = 'text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10  bg-gray-900' />
          </div>

          <a href='#' className = 'text-sm hover:underline hover:text-blue-800 mt-2 inline-block text-center'>Don't have an account</a>
  
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-4 bg-blue-900 hover:bg-blue-800'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

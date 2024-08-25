import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-900  flex flex-row px-4 py-2 mb-2'>
      <div className = "avatar online">
            <div className = "w-12 h-12 rounded-full">
                <img src="https://randomuser.me/api/portraits"/>
            </div>
        </div>
      <span className=' text-white font-bold mt-2 mx-4'>Askim</span>
    </div>
  )
}

export default Header

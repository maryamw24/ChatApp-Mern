import React from 'react'
import { IoSearchSharp } from "react-icons/io5";




const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type="text" placeholder='Search' className="input input-bordered rounded-full  bg-gray-900"/>
      <button type="submit" className="btn btn-circle bg-indigo-950 text-white " >
      <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput

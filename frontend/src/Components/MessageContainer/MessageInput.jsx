import React from 'react'
import { IoMdSend } from "react-icons/io";


const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type='text' placeholder='Type your message here' className=' bg-gray-900 text-sm w-full p-2 border border-gray-500 rounded-lg text-white'/>
        <button className='absolute rounded-lg flex items-center inset-y-0 end-2'>
        <IoMdSend />
        </button>
        </div>
      
    </form>
  )
}

export default MessageInput

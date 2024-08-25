import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className= "flex gap-3 items-center hover:bg-indigo-950 p-2 py-1 cursor-pointer" >
        <div className = "avatar online">
            <div className = "w-12 h-12 rounded-full">
                <img src="https://randomuser.me/api/portraits"/>
            </div>
        </div>
        <div className = "flec flex-col flex-1">
            <div className = "flex gap-3 items-center justify-between">
                <h1 className = "text-lg font-semibold">Askim</h1>
                <span className = "text-xs text-gray-400">12:30</span>
            </div>
    </div>
    </div>
    <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation

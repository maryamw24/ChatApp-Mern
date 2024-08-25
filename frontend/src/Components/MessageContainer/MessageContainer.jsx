import React from 'react'
import Header from './Header'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
    const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? <NoChatSelected/>:
      (<>
      <Header/>
      <Messages/>
      <MessageInput/> </>)
        }
    </div>
  )
}

const NoChatSelected = () => {
    return (
        <div className='flex flex-col items-center justify-center flex-1'>
        <h1 className='text-2xl font-bold text-gray-500'>No chat selected</h1>
        <p className='text-gray-400'>Select a chat to start messaging</p>
        </div>
    )
}

export default MessageContainer

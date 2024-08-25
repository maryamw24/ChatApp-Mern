import React from 'react'

const Message = () => {
  return (
    <>
       <div className="chat chat-start">
            
            <div className="chat-bubble">Hey! I lovee you</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">2:30 PM</div>
        </div>

        <div className="chat chat-end">
            
            <div className="chat-bubble">I love you tooo</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">2:30 PM</div>
        </div>
    </>
  )
}

export default Message

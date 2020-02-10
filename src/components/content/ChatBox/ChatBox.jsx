import React from 'react'
import './ChatBox.scss'
import Message from '../Message/Message'

export default function ChatBox(props) {
  
  return (
    <div className="ChatBox">
      <div className="box">
        <Message />
      </div>
    </div>
  )
}
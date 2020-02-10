import React from 'react'
import './Chat.scss'
import ChatBox from '../../content/ChatBox/ChatBox'
import Input from '../../content/Input/Input'

export default function Chat(props) {
  return (
    <div className="Chat">
      <h4>Este es el Chat</h4>
      <ChatBox />
      <Input name="message" placeholder="Send a message..." />
    </div>
  )
}
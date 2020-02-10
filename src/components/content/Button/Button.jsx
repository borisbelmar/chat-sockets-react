import React from 'react'
import './Button.scss'

export default function Button(props) {
  return (
    <button className={`Button ${props.className || ''}`} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
import React from 'react'
import './Input.scss'

export default function Input(props) {

  return (
    <div className={`Input ${props.className || ''}`}>
      {props.label ? 
        <label htmlFor={props.name}>{props.label}</label>
      : null}
      <input 
        name={props.name} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
      />
      <small className="error-message">Este es un error</small>
    </div>
  )
}
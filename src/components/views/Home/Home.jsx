import React from 'react'
import './Home.scss'
import Button from '../../content/Button/Button'

export default function Home(props) {
  return (
    <div className="Home">
      <div className="container">
        <h4>DeepNet Chat</h4>
        <div className="buttons">
          <Button text="Ingresar" />
          <Button text="Registrarse" className="primary"/>
        </div>
      </div>
    </div>
  )
}
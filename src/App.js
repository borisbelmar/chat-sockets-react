import React from 'react'
import './scss/base/all.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/views/Home/Home'
import Login from './components/views/Login/Login'
import Chat from './components/views/Chat/Chat'
import Signup from './components/views/Signup/Signup'
import { SocketContextProvider } from './components/context/SocketContext'

function App() {
  return (
    <SocketContextProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    </SocketContextProvider>
  );
}

export default App

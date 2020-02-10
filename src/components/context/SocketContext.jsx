import React from 'react'
import socketIOClient from "socket.io-client"

export const SocketContext = React.createContext({ socket: null });

export function SocketContextProvider(props) {
  const socket = socketIOClient(process.env.REACT_APP_API)

	return (
    <SocketContext.Provider
      value={{
        socket
      }}
    >
      {props.children}
    </SocketContext.Provider>
	);
}

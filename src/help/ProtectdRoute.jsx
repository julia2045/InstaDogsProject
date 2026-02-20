import React, { useContext } from 'react'
import { UserContext } from '../UseContext'
import { Navigate } from 'react-router-dom'

const ProtectdRoute = ({children}) => {

    const {login} = useContext(UserContext)
  return login ? children : <Navigate to={"/login"}/>
}

export default ProtectdRoute

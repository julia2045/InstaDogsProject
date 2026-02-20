import React, { Children, useState,useEffect } from 'react'
import { Token, UserGet, Validate_Token } from './api'
import { useNavigate } from 'react-router-dom'

    export const UserContext = React.createContext()


    export const UseStorage = ({children}) => {
        const [data, setData] = useState(null)
        const [login, setLogin] = useState(null)
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)
        const navigate = useNavigate()

      

        async function getUser(token) {
            const {url, options} = UserGet(token)

            const response = await fetch(url, options)
            const json = await response.json()
            setData(json)
            setLogin(true)
        }
        async function UserLogin(username, password) {
            try {
                setError(null)
                setLoading(true)
                const {url, options} = Token({username, password})
                const response = await fetch(url, options)
                if(!response.ok) throw new Error (`Error: ${response.statusText}}`)
                const json = await response.json()
                window.localStorage.setItem('token', json.token)
                getUser(json.token) 
                navigate('/conta')               
            } catch (error) {
                setError(error.message)
                setLogin(false)
            }
            finally{
                setLoading(false)
            }
            
        }
        const  userLogout = React.useCallback(async function () {
            setData(null)
            setError(null)
            setLoading(false)
            setLogin(false)
            window.localStorage.removeItem('token')

        }, []) 


          useEffect(() => {
            async function autoLogin() {
                const token = window.localStorage.getItem('token')
                setError(null)
                setLoading(true)

                if(token){
                    const {url,options} = Validate_Token(token)
                    try {
                        const response = await fetch(url, options)
                        if(!response.ok) throw new Error ('Token Inválido')
                            await getUser(token)
                    } catch (error) {
                        setError(error.message)
                        userLogout()
                    }
                    finally{
                        setLoading(false)
                    }
                } else{
                    setLoading(false)
                }
            }
            autoLogin()
        },[userLogout])

        
    return (
        <UserContext.Provider value={{UserLogin, getUser, data, setData,userLogout, error, loading, login }}>
        {children}
        </UserContext.Provider>
    )
    }


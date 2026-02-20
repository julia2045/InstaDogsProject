import React from 'react'
import styles from './Login.module.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../UseContext'
import Error404 from '../Error404'
import Head from '../help/Head'

const Login = () => {

  const {login} = React.useContext(UserContext)
  if(login === true) return <Navigate to={'/conta'} />
  return (
    //como tera duas rotas no login
    //uma para cadastro e uma para lougin adiciono os routes e route para formar as rotas especificas
      <section className={styles.login}>
        <Head title='Login'
          description='Login do site Dogs, com Formulários'
        />
        <div className={styles.forms}>
        <Routes>
          <Route path='/' element= {<LoginForm/>}/>
          <Route path='criar'  element= {<LoginCreate/>} />
          <Route path='perdeu'  element= {<LoginPasswordLost/>} />
          <Route path='resetar'  element= {<LoginPasswordReset/>} />
          <Route path='*' element={<Error404/>}/>

        </Routes>
        </div>
      </section>
   
    
  )
}

export default Login

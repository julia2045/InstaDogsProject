import React from 'react'
import styles from './LoginCreate.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../Hooks/UseForm'
import { UserPost } from '../api'
import { UserContext } from '../UseContext'
import UseFetch from '../Hooks/UseFetch'
import Error from '../help/Error'
import Head from '../help/Head'



const LoginCreate = () => {

const username = UseForm()
const email = UseForm('email')
const password = UseForm()
const {erro,  loading, Request} = UseFetch()

const {UserLogin} =  React.useContext(UserContext)

 async function handleSubmit(e){
    e.preventDefault()
    const {url, options} = UserPost({username: username.value, password: password.value, email: email.value})
    const {response} = Request(url,options)
    if(response.ok) return UserLogin(username.value, password.value)
    
    
  }
  return (
    <section className='animeLeft'>
      <Head title='Crie sua Conta'/>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type="text" name="username" {...username}/>
        <Input label='Email' type="email" name="email" {...email}/>
        <Input label='Senha' type="password" name="password" {...password}/>
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={erro}/>
      </form>
    </section>
  )
}

export default LoginCreate

import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../Hooks/UseForm'
import UseFetch from '../Hooks/UseFetch'
import { PassWordLost } from '../api'
import Error from '../help/Error'
import Head from '../help/Head'

const LoginPasswordLost = () => {

  //para deixar o campo reativo utilizar o use form
  const login = UseForm()
  const {data, error, loading, request} = UseFetch()

  async function handleSubmit(e){
    e.preventDefault()
    if(login.validate()){ 
      const {url, options} = PassWordLost({
        login: login.value, 
        url: window.location.href.replace('perdeu', 'resetar')
      })
      const {json} = await request(url, options)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Perdeu a senha?'/>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
        <Input 
          label='Email/ Usuário' 
          type="text" 
          name='login'
          {...login}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar Email</Button>
        )}
      </form>
      )}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost

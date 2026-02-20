import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../Hooks/UseForm'
import UseFetch from '../Hooks/UseFetch'
import { PassWordReset } from '../api'
import Error from '../help/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../help/Head'

const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = UseForm()
  const {error, loading, request} = UseFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    //função para buscar parametros
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  }, [])

    async function handleSubmit(e) {
      e.preventDefault()
      if (password.validate()) {
        const { url, options } = PassWordReset({
          login,
          key,
          password: password.value,
        })

        const { response } = await request(url, options)
        if (response.ok) navigate('/login')
      }

    }

  
  return (
    <section className='animeLeft'>
      <Head title='Resete a senha'/>
      <h1 className='title'>Resete a Senha!</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          label='Nova senha'
          type='password'
          name='password'
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error}/>
    </section>
  )
}

export default LoginPasswordReset

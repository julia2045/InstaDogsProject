import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../Hooks/UseForm'
import { Token, UserGet } from '../api'
import { UserContext } from '../UseContext'
import Error from '../help/Error'
import styles from './LoginForm.module.css'
import stylesbtn from '../Forms/Button.module.css'
import Head from '../help/Head'



const LoginForm = () => {

  const username = UseForm()
  const password = UseForm()

  const {UserLogin, getUser, error, loading} = React.useContext(UserContext )


  //criar um efeito para pegar um usuario caso ele esteja no local storage quando iniciar  a navegaçao
  //que ocorrerá somente uma vez, por isso não contem o parametro []
  React.useEffect(() => {
    //crio uma constque pega(get) o item = token que estiver no local storage
    const token = window.localStorage.getItem('token')
    //ai eu digo que se existir mesmo algum item la ( token)
    if(token){
      //puxe esse token para a função do usuario para que apareça o dados do user
      GetUser(token)
    }
  }, [])
  //função assincrona para pegar o usuario atraves do token
  async function GetUser(token) {
    getUser(token)
  }
  //função para envio de formulario
 async function handleSubmit(e){
//previno o evento de carregamento da pagina
    e.preventDefault()
    //crio uma condição onde o só ira retornar se username e password passarem pela validação
    if(username.validate() && password.validate()){

      UserLogin(username.value, password.value)

      //aqui chamo a função Token() passando username e password, e desestruturo o retorno em url e options
      //const {url, options} = Token({username: username.value, password: password.value})
      
      //aqui realizo  o fetch de forma assincrona utilizando o async ( no inicio da função)
      //e await para carregar a resposta
      //ao inves de passar o link e as opções( repetidamente)
      //eu utilizo os parametros que desestruturei anteriormente
       //const response = await fetch(url, options)
       //pego essa resposta e transformo em json
      //const json = await response.json()
      //e adiciono o token ao localStorage
      //window.localStorage.setItem('token', json.token)

    }
    
  }
  return (
    <section className='animeLeft'>
      <Head title='Login'/>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}> 
          <Input label="Usuário" type="text" name="userName" {... username} />
          <Input label="Senha" type="password" name="password" {... password}/>
          {loading ? <Button disabled >Carregando...</Button> : <Button>Entrar</Button> }
           
          <Error error={error && 'Dados incorretos'}/>
      </form>
      
      <Link className={styles.recuperacao} to={'/login/perdeu'}>Recuperar senha?</Link>
    
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>

      <Link className={stylesbtn.button} to = {'/login/criar'}>Cadastro</Link>
    </section>
  )
}

export default LoginForm

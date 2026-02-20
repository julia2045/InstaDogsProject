import React from 'react'
import styles from './UserPhotoPost.module.css'
import UseForm from '../Hooks/UseForm'
import UseFetch from '../Hooks/UseFetch'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { PhotoPost} from '../api'
import Error from '../help/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../help/Head'


const UserPhotoPost = () => {

  const nome = UseForm()
  const peso = UseForm('number')
  const idade = UseForm('number')
  const [img, setImg] = React.useState({})
  const {data, error ,loading, request } = UseFetch()
  const navigate = useNavigate()



  React.useEffect(() => {
    if(data) navigate('/conta')

  }, [data, navigate])

  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token');
    const {url, options} = PhotoPost(formData, token)
    request(url, options)

  }

  function handleImgChange({target}){
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

 

  return (
    <section className={`${styles.photoPost} animeleft`}>
      <Head title='Poste sua Foto'/>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" id="nome"{... nome}/>
        <Input label="Peso" type="number" id="peso" {... peso}/>
        <Input label="Idade" type="number" id="idade" {... idade}/>
        <input className={styles.files} type='file'  id='img' onChange={handleImgChange}/>
        
          {loading ? <Button disabled> Enviando...</Button> : <Button>Enviar</Button>}
          <Error error={error}/>
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage:`url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost

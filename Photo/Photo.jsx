import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../src/Hooks/UseFetch'
import { PhotoSoloGet } from '../src/api'
import Error from '../src/help/Error'
import Loading from '../src/Forms/Loading'
import PhotoContent from './PhotoContent'
import Head from '../src/help/Head'

const Photo = () => {
  //retorna um objeto com os parâmetros da rota, e como desestruturamos o id, ai podemos pegar ele.
  const {id} = useParams()
  const {data, loading, error, request} = UseFetch()

  React.useEffect(() => {
    const {url} = PhotoSoloGet(id)
    request(url)
  },[request, id])

    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(data) return (
      <section className='container mainContainer'> 
        <Head title={data.photo.title}/>
        <PhotoContent single={true} data={data}/>
      </section>)
    else return null
  
}

export default Photo

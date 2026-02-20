import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import UseFetch from '../Hooks/UseFetch'
import { PhotosGet } from '../api'
import Error from '../help/Error'
import Loading from '../Forms/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ user,setModalPhoto, setInfinite}) => {

    const {data, error, loading, request} = UseFetch()
    

    React.useEffect(() => {
        async function fetchPhotos() {
            const total = 6
            const {url, options} = PhotosGet({page: 1, total, user})
            const {response, json }= await request(url, options)
            if(response && response.ok && json.length < total) setInfinite(false)

        }
        fetchPhotos()
    }, [request, user,setInfinite])

    if( error) return<Error error={error}/>
    if(loading) return<Loading/>
    if(data)
  return (
    <ul className={`${styles.feed} animeLeft `}>
        {data.map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
        ))}
      
    </ul>
  )
  else return null
}

export default FeedPhotos

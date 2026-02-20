import React from 'react'
import styles from  './FeedModal.module.css'
import UseFetch from '../Hooks/UseFetch'
import { PhotoGet } from '../api'
import Error from '../help/Error'
import Loading from '../Forms/Loading'
import PhotoContent from '../../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {

  const {data, loading, error, request} = UseFetch()

  React.useEffect(() => {
    const {url, options} = PhotoGet(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutsideClick(e){
    //maneira de clicar fora do modal utilizando target e current
    //current pega todo o modelo criado no caso o feed modal, imcluindo padding e o modal
    //ja o target somente aonde clica, foto/div
    //nesse caso quando eu clicar fora do modal, current e target serão igual ambos seram o feedmodal(o padding do feed modal)
    //ai neste caso usamos a condição para fechar o modal
    if(e.target === e.currentTarget) setModalPhoto(null)
  }


  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data} /> }
      
    </div>
  )
}

export default FeedModal

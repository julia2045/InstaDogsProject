import React from 'react'
import Enviar from '../Assets/enviar.svg?react'
import UseFetch from '../src/Hooks/UseFetch'
import { CommentPost } from '../src/api'
import Error from '../src/help/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {

    const [comment, setComment] = React.useState('')
    const {request, error} = UseFetch()
    
    async function HandleSubmit(e){
        e.preventDefault()
        const { url, options} = CommentPost(id, { comment: comment })
        const {response, json} = await request(url,options)
        if (response.ok){
            setComment('')
            setComments((comments) => [...comments,json])
        }
    }

  return (
    <form className={styles.form} onSubmit={HandleSubmit}>
      <textarea 
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({target})=> setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar/>
      </button>
      <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm

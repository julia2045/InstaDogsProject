import React from 'react'
import {UserContext} from '../src/UseContext'
import PhotoCommentsForm from './PhotoCommentsForm.jsx'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  
  const [comments, setComments] = React.useState(() => props.comments )
  const commentsSection = React.useRef(null)
  const {login} = React.useContext(UserContext)
  
  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    //faz com que o scrool inicie em baixo para mostra sempre do mais recente
  },[comments])
  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
      
    </>
  )
}

export default PhotoComments

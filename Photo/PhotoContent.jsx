import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import { UserContext } from '../src/UseContext'
import PhotoDelete from './PhotoDelete'
import Image from '../src/help/image'
const PhotoContent = ({data, single}) => {

  const user = React.useContext(UserContext)
  const {photo, comments} = data
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>    
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {/* //criando condição para que so apareça o botão de Deletar
            //caso o user da pessoa foi o mesmo da pessoa que postou */}
            {user.data && user.data.username === photo.author ? 
              (
                <PhotoDelete id={photo.id}/>
              ) : 
              (
                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              )
            }
            <span className={styles.visu}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade === 1 ? 'ano' : 'anos'} </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments}/>  
    </div>
  )
}

export default PhotoContent

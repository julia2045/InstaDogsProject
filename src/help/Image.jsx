import React from 'react'
import styles from './Image.module.css'

const Image = ({alt, ...props}) => {
const [skeleton, setSkeleton] = React.useState(true)

    function handleLoad({target}){
        {/*aqui deixo ele como falso, caso a imagem/ request ja tenha sido concluido*/}
        setSkeleton(false)
        target.styles.opacity = 1
    }

  return (
    <div className={styles.wrapper}>
        {/* se skeleton for real ou seja esteja carregando, mostre ele senão mostre somente a imagem */}
        {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img}  alt={alt} {...props} />
    </div>
  )
}

export default Image

import React from 'react'
import styles from '../Forms/Button.module.css'
const Button = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button}>
        {/*representa o filho, o que está dentro do elemento*/}
      {children}
    </button>
  )
}

export default Button

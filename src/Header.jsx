import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Dogs from '../Assets/dogs.svg?react'
import { UserContext } from './UseContext'



const Header = () => {

  const {data} = React.useContext(UserContext)
  return (
    <header className={styles.Header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'><Dogs /></Link> {' '}
        {data ? (<Link className={styles.login} to='/conta'>
                      {data.nome}
                  </Link> ) 
        :
         (<Link className={styles.login} to='/login'>Login /Criar</Link> )}
        
      </nav>
    </header>
  )
}

export default Header

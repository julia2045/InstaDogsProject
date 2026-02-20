import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../UseContext'
import styles from './UserHeaderNav.module.css'

import MinhasFotos from '../../Assets/feed.svg?react'
import Estatisticas from '../../Assets/estatisticas.svg?react'
import AdicionarFotos from '../../Assets/adicionar.svg?react'
import Sair from '../../Assets/sair.svg?react'
import UseMedia from '../Hooks/UseMedia'

const UserHeaderNav = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate()
  const mobile = UseMedia('(max-width: 640px)')
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuMobile(false)
  }, [pathname])

  function handleLogout() {
    userLogout()
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            menuMobile && styles.mobileButtonActive
          }`}
          aria-label="menu Mobile"
          onClick={() => setMenuMobile(!menuMobile)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          menuMobile && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta">
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to="/conta/postar">
          <AdicionarFotos />
          {mobile && 'Adicionar Fotos'}
        </NavLink>

        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav

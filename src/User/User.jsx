import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../UseContext'
import Error404 from '../Error404'
import Head from '../help/Head'

const User = () => {
  //puxar os dados do usuario para que possa separar na 'minha conta ' somente as fotos que posto
  const {data} = React.useContext(UserContext)
  return (
    <section className='container'>
      <Head titlte='Minha Conta'/>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserPhotoPost/>}/>
        <Route path='estatisticas' element={<UserStats/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </section>
  )
}

export default User

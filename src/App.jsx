import React from 'react'
import './App.css'
import Home from './Home'
import Login from './login/Login'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseStorage } from './UseContext'
import ProtectdRoute from './help/ProtectdRoute'
import User from './User/User'
import Photo from '../Photo/Photo'
import UserProfile from './User/UserProfile'
import Error404 from './Error404'


function App() {
  

  return (
    <div className='App'>
    <BrowserRouter>
      <UseStorage>
        <Header />
        <main className='AppBody'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login/*' element={<Login/>}/>
            <Route path='foto/:id/*' element={<Photo/>}/>
            <Route path='perfil/:user/*' element={<UserProfile/>}/>
            <Route path='conta/*' element={<ProtectdRoute><User/></ProtectdRoute>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </main>
        <Footer />
      </UseStorage>
    </BrowserRouter>
    </div>
  )
}

export default App

import ContactPage  from './pages/ContactPage'
import HomePage  from './pages/HomePage'

import {  Routes,Route } from "react-router-dom"

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddProductPage from './admin/pages/AddProductPage'
import AddPostPage from './admin/pages/AddPostPage'

import SignUp from './Login/SignUp'
import SignInSide from './Login/SignInSide'

const AppRouter = () => {
    
  return (
    <>
    <Header/>
    <Routes>
    <Route exact path="/" element={<HomePage  key={Date.now()} />} />

    <Route exact path="/contact" element={<ContactPage  key={Date.now()} />} />

    <Route exact path="/addprod" element={<AddProductPage  key={Date.now()} />} />
    <Route exact path="/addpost" element={<AddPostPage  key={Date.now()} />} />
    <Route exact path="/signin" element={<SignInSide  key={Date.now()} />} />
    <Route exact path="/signup" element={<SignUp  key={Date.now()} />} />

    </Routes>
    <Footer/>
    </>


  )
}

export default AppRouter
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import ProductPage from './pages/ProductPage'
import Register from './pages/Register'
import Success from './pages/Success'
import {useSelector} from "react-redux"

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  // const user=false;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductPage />} />

        {user ? <Route path="/login" element={<Home />} /> :
        <Route path='/login' element={<Login />} />
          } 

         {user ? <Route path="/" element={<Home />} /> : 
        <Route path='/register' element={<Register />} />
          } 

        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App


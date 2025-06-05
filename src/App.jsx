import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import All_Product from './components/All_Product'
import Product_Detail from './pages/Product_Detail'
import ProductByCategory from './pages/ProductByCategory'
import Search_Product from './pages/Search_Product'
import Trending_Slider from './components/Trending_Slider'
const App = () => {
  return (
    <>
 
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<All_Product/>}> </Route>
          <Route path='/cart' element={<Cart/>}> </Route>
          <Route path='/product/:id' element={<Product_Detail/>}> </Route>
          <Route path='/product/category/:cat' element={<ProductByCategory/>}> </Route>
          <Route path='/product/search/:term' element={<Search_Product/>}> </Route>
          
        </Routes>

      </Router>



    </>
  )
}

export default App

import React from 'react'
import { useParams } from 'react-router'
import { items } from '../context/data'
import Products from '../components/Products'
const Search_Product = () => {
   const {term}=useParams()
   const searchProducts=items.filter((pro)=>pro.title.toLowerCase().includes(term.toLocaleLowerCase()))




  return (
    <div>
      <Products items={searchProducts}/>

    </div>
  )
}

export default Search_Product

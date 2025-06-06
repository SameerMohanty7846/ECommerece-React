import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Products from '../components/Products'
import { useParams } from 'react-router'
import { Videos } from '../context/data'
import { items } from '../context/data'
const ProductByCategory = () => {
  const{cat}= useParams();
  const videoByCategory=Videos.find((video)=>video.category.toLowerCase()===cat.toLowerCase());
  const productsByCategory=items.filter((pro)=>pro.category.toLowerCase()===cat.toLowerCase());


  return (
    <div>
      <VideoPlayer src={videoByCategory.url}/>
      <Products items={productsByCategory}/>
    </div>
  )
}

export default ProductByCategory

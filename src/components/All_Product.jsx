import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import Products from './Products'
import VideoPlayer from './VideoPlayer'

const All_Product = () => {
 const{ products }=useContext(DataContext);
 console.log("my products=",products)
  return (
    <div>
      <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4"  />
      <Products items={products}/>
      
    </div>
  )
}

export default All_Product

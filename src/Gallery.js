import React from 'react'
import img1 from './img/img1.jpg'


const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc:img1,
        },
        {
            id: 2,
            imgSrc:img1,
        },
        {
            id: 3,
            imgSrc:img1,
        }
    ]



  return (
      <>
          {console.warn(data)}
      
      </>
  )
}

export default Gallery
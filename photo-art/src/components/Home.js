// import React from 'react'

// const Home = () => {
//   return (
//     <>
//       <section className="hero">
//         <h1>Welcome To Home Page</h1>
//       </section>
//     </>
//   )
// }
// export default Home

import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import './home.css'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.png'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.png'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import img9 from './img/img9.jpg'
import img10 from './img/img10.jpg'
import img11 from './img/img11.jpg'
import img12 from './img/img12.jpg'
import img13 from './img/img13.jpg'
import img14 from './img/img14.jpg'
import img15 from './img/img15.jpg'
import img16 from './img/img16.jpg'
import img17 from './img/img17.jpg'
import img18 from './img/img18.jpg'
import img19 from './img/img19.jpg'
import img20 from './img/img20.jpg'
import img21 from './img/img21.jpg'
import img22 from './img/img22.jpg'
import img23 from './img/img23.jpg'
import img24 from './img/img24.jpg'
import img25 from './img/img25.jpg'
import img26 from './img/img26.jpg'
import img27 from './img/img27.jpg'
import img28 from './img/img28.jpg'
import img29 from './img/img29.jpg'
import img30 from './img/img30.jpg'
import img31 from './img/img31.jpg'
import img32 from './img/img32.jpg'
import img33 from './img/img33.jpg'
import img34 from './img/img34.jpg'
import img35 from './img/img35.jpg'
import img36 from './img/img36.jpg'
import img37 from './img/img37.jpg'
import img38 from './img/img38.jpg'
import img39 from './img/img39.jpg'
import img40 from './img/img40.jpg'
import img41 from './img/img41.jpg'
import img42 from './img/img42.jpg'
import img43 from './img/img43.jpg'
import img44 from './img/img44.jpg'

const Gallery = () => {
  //   let data = [
  //     {
  //       id: 1,
  //       imgSrc: img1,
  //     },
  //     {
  //       id: 2,
  //       imgSrc: img2,
  //     },
  //     {
  //       id: 3,
  //       imgSrc: img3,
  //     },
  //     {
  //       id: 4,
  //       imgSrc: img4,
  //     },
  //     {
  //       id: 5,
  //       imgSrc: img5,
  //     },
  //     {
  //       id: 6,
  //       imgSrc: img6,
  //     },
  //     {
  //       id: 7,
  //       imgSrc: img7,
  //     },
  //     {
  //       id: 8,
  //       imgSrc: img8,

  //     },
  //     {
  //       id: 9,
  //       imgSrc: img9,
  //     },
  //     {
  //       id: 10,
  //       imgSrc: img10,
  //     },

  // ]

  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
    {
      id: 31,
      imgSrc: img31,
    },
    {
      id: 32,
      imgSrc: img32,
    },
    {
      id: 33,
      imgSrc: img33,
    },
    {
      id: 34,
      imgSrc: img34,
    },
    {
      id: 35,
      imgSrc: img35,
    },
    {
      id: 36,
      imgSrc: img36,
    },
    {
      id: 37,
      imgSrc: img37,
    },
    {
      id: 38,
      imgSrc: img38,
    },
    {
      id: 39,
      imgSrc: img39,
    },
    {
      id: 40,
      imgSrc: img40,
    },
    {
      id: 41,
      imgSrc: img41,
    },
    {
      id: 42,
      imgSrc: img42,
    },
    {
      id: 43,
      imgSrc: img43,
    },
    {
      id: 44,
      imgSrc: img44,
    },
  ]

  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="mypic" />
        <ImCross onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="mypic" style={{ width: '100%' }} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Gallery

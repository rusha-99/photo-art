import React,{useState} from 'react'
import img1 from './img/img1.jpg'
import img3 from './img/img3.png'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.png'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'



const Gallery = () => {
    let data = [
      {
        id: 1,
        imgSrc: img1,
      },
      {
        id: 2,
        imgSrc: img3,
      },
      {
        id: 3,
        imgSrc: img4,
      },
      {
        id: 4,
        imgSrc: img5,
      },
      {
        id: 5,
        imgSrc: img6,
      },
      {
        id: 6,
        imgSrc: img7,
      },
      {
        id: 7,
        imgSrc: img8,
      },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }


  return (
      <>
            <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="mypic" />
        
        </div >


          <div className="gallery">
              {data.map((item,index) => {
                  return (
                      <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="mypic" style={{width:'100%'}} />
                      </div>
                  )
              })}
         </div>
      
      </>
  )
}

export default Gallery
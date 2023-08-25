import { useState, useRef,useEffect } from 'react'
import './App.css'
import axiose from './axios'
import imagesLogo from "../src/assets/Frame.png"

function App() {
   const [fetchs, setFetchs]= useState([])
   const [categor, setCategor]=useState([])
   const images = useRef(null)

  useEffect(()=>{
    let isFetch = false

    axiose("/products")
    .then(response => setFetchs(response.data))
    .catch(err => console.log(err))
     

    return ()=>{
      isFetch = true
    }


  },[])

 
  
  return (
    <div  className='container'>
          <h1>Today Is Only For You</h1>
        <div className="card_main">
            {fetchs.slice(0,10).map(product => 
              <div className="cards">
                <img className='imgcard' src={product.image} alt="" style={{width:"159px",height:"189px"}}/>
                 <h2>{product.category}</h2>
                  <p>{product.title.slice(0,25)}</p>
                  <span>${product.price}  <img className='Logo' src={imagesLogo}/>4.7</span>
              </div>
           )}
        </div>
    </div>
  )

}

export default App


 

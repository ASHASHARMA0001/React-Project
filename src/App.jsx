import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Saved from './component/Saved'
import Home from './component/Home'



const App =()=> {
const [images,setImage] = useState([])
const [search,setSearch]= useState("nature")
const [loader,setLoader]= useState(true)
const [saved,setSaved] = useState([])

const api = "7wCEuUBxr90MVDfodOFQBWzZHXbBugn0zf8kt4tBPw3siRr7LJWOWc7m"



useEffect(()=>{
  const fetchImage = async()=>{
    const res =  await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
    {
      headers:{
        Authorization:api
      },
    }
    );
    console.log(res)
    // console.log("response = ",res.data.photo)
    setImage(res.data.photos)
    setLoader(false)
    console.log(images)
    const data =  JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSaved(data)
    }
  
  }
  fetchImage()
  },[ search])

  useEffect(()=>{
    if(saved.length !==0){
      const json = JSON.stringify(saved)
      localStorage.setItem('Images',json)
    }
  },[saved])
  console.log('image is saved',saved)

  return(
    <>
    <BrowserRouter>
    <Navbar setSearch={setSearch}/>
    <Routes>
      <Route path="/" element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved}/>}/>
      <Route path="/saved" element={<Saved  saved={saved} loader={loader}/>} /> 
   
    </Routes>
    </BrowserRouter>
   
    </>
  )
}
export default App
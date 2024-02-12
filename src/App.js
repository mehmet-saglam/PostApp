import React from 'react'
import { useState } from 'react'
import PostList from "./components/PostList"
import "./App.css"
let id=0;

function App () {

  const [post,setPost] = useState(null)
  const [data,setData] = useState([])

  const deletePost = (idDelete) => {
    setData((items) => items.filter((item) => item.id !== idDelete));
  }

  const targetFunc = (e) => {
    setPost(e.target.value)
  }

  const clickFunc = () => {
    ++id;
    setData([...data, {id, post}])
  }

 

  return (
  <>
  <h1 className='Header'>Paylaşım Yap</h1>
  <h4 style={{marginLeft:"560px"}}>Bir metin giriniz...</h4>

  <input className='Box' type="text" onChange = {targetFunc}/>

  <button className="Paylas" onClick = {clickFunc}>Paylaş</button>  
  <h4 className='Header' style=
    {{fontSize:"25px",
    marginTop:"10px",
    }} >
    Paylaşılanlar
  </h4>
  <div>
    <PostList text={data} deletePost={deletePost}/>
  </div>

  </>
  )
}

export default App

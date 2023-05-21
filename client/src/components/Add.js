import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Add = () => {

  const navigate = useNavigate()

  const [books,setBook]=useState({
    title:"",
    descrip:"",
    price:null,
    clr_png:"",
  });

  const handleChange =(e)=>{
    setBook(prev=>({...prev,[e.target.name]:e.target.value}));
  }

  const handleClick = async e=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/books",books);
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='container'>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Book Title</label>
          <input type="text" name="title" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Title"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input type="number" name="price" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="1200"/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Cover Png</label>
          <input type="text" name="clr_png" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="cover"/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Book Description</label>
          <textarea  name="descrip" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default Add
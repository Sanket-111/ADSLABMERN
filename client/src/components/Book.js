import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Book = () => {

  const [books,setbooks]=useState([])
  
  useEffect(()=>{
    const fetchallbooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        setbooks(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchallbooks()
  },[])

  const handleDelete = async (id)=>{
    try{
        await axios.delete("http://localhost:8800/books/"+id)
        window.location.reload()
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container p-3">
      <h1>Books Store</h1>
      <div className="card-group">
      {books.map(book=>(
            <div className="card p-2 " key={book.id}>
              <img className="card-img-top" src={book.clr_png} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{book.booktitle}</h5>
                <p className="card-text">{book.descrip}</p>
                <p className="card-text"><small className="text-muted">{book.price}</small></p>
              </div>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
                <button><Link to={`/update/${book.id}`}>Update</Link></button>     
            </div>
           ))}   
      </div>

      <button><Link to="/add">Add new Book</Link></button>
    </div>
  )
}

export default Book
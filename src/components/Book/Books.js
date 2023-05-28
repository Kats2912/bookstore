import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Book from './Book';

const URL = "http://localhost:5000/books"
const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data);
}

export default function Books() {

  const [books,setbooks] =useState();
  useEffect(() => {
    fetchHandler().then((data)=>setbooks(data.books));
  }, [])
  console.log(books);

  return (
    <div>
      <ul>
        {books&&books.map((book,i)=>{
          <div key={i}>
            <Book/>
          </div>
        })}
      </ul>
    </div>
  )
}

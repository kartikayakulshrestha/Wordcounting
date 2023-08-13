import React, { useState } from 'react'

export default function TextForm(Props) {

  const[text,setText]= useState("Write Anything")
  function handleup() {
      setText(text.toUpperCase())
      
  }
  function handlechange(event){
      setText(event.target.value)
      console.log("changing"+text)
  }
  return (
            <>
            <h1>{Props.name}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="Kar" placeholder={text} rows="8"  onChange={handlechange} ></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleup}>Upper</button>
            <h1>{text}</h1>
            </>
            
  )
  
}


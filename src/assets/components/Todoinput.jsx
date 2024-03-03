import React, { useContext, useRef, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Todoitemsfromcontext } from '../../store/Todoitemsstore';
const Todoinput = () => {
  const todoitemsobj=useContext(Todoitemsfromcontext)
  const Addtodoitems=todoitemsobj.Addtodoitems;
  const todonameinput=useRef()
  const tododuedate=useRef()
 
  function todoinfo(event) {
event.preventDefault()
    Addtodoitems(todonameinput.current.value,tododuedate.current.value)
    
  }
  return (
  <form action="" onSubmit={todoinfo}>
       <div class="row">
    <div class="col">
      <input type="text" placeholder='Enter your Task' ref={todonameinput} />
    </div>
    <div class="col">
      <input type="date" ref={tododuedate}/>
    </div>
   
    <div class="col colbtn">
    <button type="submit" class="btn btn-success"
    ><IoIosAddCircle /></button>
    </div>
  </div>
  </form>
   
    
  )
}

export default Todoinput

import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { Todoitemsfromcontext } from '../../store/Todoitemsstore';
const Todoitem = ({todoDate,todoName}) => {
  const todoitemsobj=useContext(Todoitemsfromcontext)
    const deleteitem=todoitemsobj.deleteitem;
   // const {todoDate,todoName}=props
  return (
    <div class="row resultrow">
    <div class="col">
      <p>{todoName}</p>
    </div>
    <div class="col">
      {todoDate}
    </div>
    <div class="col colbtn">
    <button type="button" class="btn btn-danger" onClick={()=>deleteitem(todoName,todoDate)}><FaDeleteLeft /></button>
    </div>
  </div>
  )
}

export default Todoitem

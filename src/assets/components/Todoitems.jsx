import React, { useContext } from 'react'
import Todoitem from './Todoitem'
import { Todoitemsfromcontext } from '../../store/Todoitemsstore'
const Todoitems = () => {
 const todoitemsobj=useContext(Todoitemsfromcontext);
 const todoitems=todoitemsobj.todoitems
 
  return (
   <div className='items-container'>
   {todoitems.map(item=> <Todoitem  todoDate={item.duedate} todoName={item.name} />)} 
  
   </div>
  )
  
}

export default Todoitems

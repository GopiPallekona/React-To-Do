
import { useReducer, useState } from 'react'
import './App.css'
import Heading from './assets/components/Heading'
import Todoitems from './assets/components/Todoitems'


import Todoinput from './assets/components/Todoinput'
import Todoitem from './assets/components/Todoitem'
//import Warning from './assets/components/Warning'
import { Todoitemsfromcontext } from './store/Todoitemsstore'

function ReducerFunction(initialtodoitems,action) {
  let updatedtodoitems=initialtodoitems

  if (action.type==="ADDING-ITEMS") {
     updatedtodoitems=[ ...initialtodoitems,{name :action.payload.itemname,duedate:action.payload.itemduedate} ]
    
  }
  else if (action.type==="DELETING-ITEM") {
   updatedtodoitems=initialtodoitems.filter(item=>item.name!=action.payload.itemname);
   
  }
  return updatedtodoitems
}


function App() {
 
//
//const[todoitems,settodoitems]=useState([])
const [todoitems,newtodoitemsDispach]=useReducer(ReducerFunction,[])



function Addtodoitems(itemname,itemduedate){
 // const updatedtodo=[ ...todoitems,{name :itemname,duedate:itemduedate} ]
  //settodoitems(updatedtodo)
  const AddingNewitem={
    type: "ADDING_ITEMS",
    payload:{
       itemname ,
      itemduedate
    }
  }
  newtodoitemsDispach(AddingNewitem)
}


function deleteitem(itemname) {
 // console.log(`item deleted is${itemname}`)
  //const deleteditemlist=todoitems.filter(item=>item.name!=itemname)
//settodoitems(deleteditemlist)
const Deleteitem={
  type: "DELETING_ITEM",
  payload:{
     itemname 
    
  }
}

newtodoitemsDispach(Deleteitem)
}







  return (
    <Todoitemsfromcontext.Provider value={{
      todoitems:todoitems,
      Addtodoitems:Addtodoitems,
      deleteitem:deleteitem
    }}>
    <center>
      <Heading />
      
      <div class="container text-center">
      <Todoinput />
     <Todoitems  />
   
 
      
</div>
    </center>
    </Todoitemsfromcontext.Provider>
    
   
  )
  

  


 
  
  
}

export default App

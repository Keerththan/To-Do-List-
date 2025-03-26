import React from 'react'
import {FaPlus} from 'react-icons/fa'

import { useRef } from "react";

const AddItems = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}> 
        <label htmlFor='addItems' >Add Items</label>
        <input
            autoFocus 
            type="text"
            ref={inputRef}
            id='additems'
            placeholder='Add Items'
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}

            
            
        />  
      
        <button
        type="submit"
        onClick={()=> inputRef.current.focus()}

 
        >
            <FaPlus/>
        </button>
       
      


    </form>
  )
}

export default AddItems

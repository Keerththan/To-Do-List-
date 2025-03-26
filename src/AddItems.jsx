import React from 'react'
import {FaPlus} from 'react-icons/fa'

const AddItems = () => {
  return (
    <form className='addForm'> 
        <label htmlFor='addItems' >Add Items</label>
        <input
            autoFocus 
            type="text"
            id='additems'
            placeholder='Add Items'
            required
            
            
        />  
      
        <button
        type="submit"
        >
            <FaPlus/>
        </button>
       
      


    </form>
  )
}

export default AddItems

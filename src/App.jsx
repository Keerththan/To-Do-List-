
import Header from "./Header"
import Content from './Content'
import Footer from './Footer'
import { useState } from "react";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";




function App() { 

  const [items, setItems] = useState(
  JSON.parse(localStorage.getItem("todo_list")) || []


  );

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  const[newItem,setNewItem]=useState('')

  const handleSubmit =(e)=>{
        e.preventDefault()
        if (!newItem) return
        console.log(newItem)
        addItems(newItem)
        setNewItem('')
      


  }
  const addItems = (item) => {
    const id=items.length ? items[items.length-1].id+1 :1
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

    
  }
  const [search,setSearch]=useState('')
  const handleSearch =(e)=>{



  }

 
  return (
    <>
     
     <Header title="To Do List"/>
     <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
     />
     <SearchItem
      search={search}
      setSearch={setSearch}
      handleSearch={handleSearch}
     />  
     <Content
      items={items.filter((items)=>((items.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     
     
     />
     <Footer length={items.length}/>
     
      
    </>
  )
}

export default App

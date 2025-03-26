
import Header from "./Header"
import Content from './Content'
import Footer from './Footer'
import { useState } from "react";
import AddItems from "./AddItems";




function App() { 

  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice Coding" },
    { id: 2, checked: false, item: "Play Cricket" },
    { id: 3, checked: true, item: "Sleeping" },
  ]);

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
        setItems("")

  }
  const addItems = (item) => {
    const id=items.length ? items[items.length-1].id+1 :1
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    LocalStorage.setItem("todo_list",JSON.stringify(listItems))

    
  }

 
  return (
    <>
     
     <Header title="To Do List"/>
     <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
     />
     <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     
     
     />
     <Footer length={items.length}/>
     
      
    </>
  )
}

export default App


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

 
  return (
    <>
     
     <Header title="To Do List"/>
     <AddItems/>
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

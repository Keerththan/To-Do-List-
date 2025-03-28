
import Header from "./Header"
import Content from './Content'
import Footer from './Footer'
import { useState,useEffect } from "react";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";
import { LiaSearchLocationSolid } from "react-icons/lia";





function App() { 


  const API_URL='http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const[newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')
  const [fetchError,setFetchError]=useState(null)
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    const fetchItems = async()=>{
     
      try{
        const response= await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        console.log(response);
        const listItems=await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null)
        

      }catch(err){
        setFetchError(err.message)
      }finally{
        setIsLoading(false)

      }
    }
     (async()=>await fetchItems())()

  },[])

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  

  const handleSubmit =(e)=>{
        e.preventDefault()
        if (!newItem) return
        
        addItems(newItem)
        setNewItem('')
      


  }
  const addItems = (item) => {
    const id=items.length ? items[items.length-1].id+1 :1
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    //localStorage.setItem("todo_list",JSON.stringify(listItems))

    
  }
 
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

     <main>
      {isLoading && <p>Loading Items...</p>}
    {!isLoading && <Content
      items={items.filter((items)=>((items.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     
     
     />}
     </main>
     {fetchError && <p>{`Error: ${fetchError}`}</p>}
    
     <Footer length={items.length}/>
     
      
    </>
  )
}

export default App

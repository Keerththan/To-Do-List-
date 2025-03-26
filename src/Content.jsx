import React from "react";
import ItemsList from "./ItemsList"



const Content = ({items,handleCheck,handleDelete}) => {
  

  return (
    <main>
      {items.length > 0 ? (
      <ItemsList 
         items={items}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
      
      
      />
      ) : (
        <p>No items</p>
      )}
    </main>
  );
};

export default Content;

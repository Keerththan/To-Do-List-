
import React from 'react'

const Header = ({title="haha"}) => {
    
  return (
    
        
        <header>
            <h1>{title}</h1>
            
        </header>
    
    
  )
}
Header.defaultProps={
  title:"haha"
}

export default Header

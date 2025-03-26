import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>Copyright &copy; {year.getFullYear()} length is {length} </footer>
  )
}

export default Footer

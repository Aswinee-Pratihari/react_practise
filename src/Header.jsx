import React from 'react'

const Header = ({title}) => {
  return (
    <header>
    {/* <h1>{props.title}</h1> */}
    <h1>{title}</h1>
</header>
  )
}


//this sets the value if they are not provided from the props
Header.defaultProps={
    title:'Default title'
}
export default Header

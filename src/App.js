
import { useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
 
  const[items,setItems]=useState([
    {
        id:1,
        checked:false,
        item:"Item1"
    },
    {
        id:2,
        checked:true,
        item:"Item2"
    },
    {   id:3,
        checked:false,
        item:"Item3"

    }
]) 

const handleCheck=(id)=>{
    // setItems(!items)
    // alert(`${id}`)
    console.log(`${id}`)
    const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem('list',JSON.stringify(listItems))
}

const handleDelete=(id)=>{
console.log(id)
const listItems=items.filter((item)=>item.id!==id);
setItems(listItems)  //this will delete a item if its id matches to given id
    localStorage.setItem('list',JSON.stringify(listItems))
}


  return (
 <div className='App'>
 <Header title='Groceries'/>
 {/* <Header/> */}
 <Content  
 items={items}
 setItems={setItems}
 handleCheck={handleCheck}
 handleDelete={handleDelete}/>
 <Footer length={items.length}/>
 </div>
  );
}

export default App;

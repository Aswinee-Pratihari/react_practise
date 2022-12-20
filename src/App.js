
import { useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
 
  const[items,setItems]=useState(
    JSON.parse(localStorage.getItem('list'))
) 

const [newItem,setNewItem]=useState('');
const[search,setSearch]=useState('')
const setandSaveItems=(listItems)=>{
    setItems(listItems)
    localStorage.setItem('list',JSON.stringify(listItems))
}
const additem=(item)=>{
const id=items.length ?items[items.length-1].id+1:1
const mynewItem={id,checked:false,item};
const listItems=[...items,mynewItem];
setandSaveItems(listItems)
}


const handleCheck=(id)=>{
    // setItems(!items)
    // alert(`${id}`)
    console.log(`${id}`)
    const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    setandSaveItems(listItems)
}

const handleDelete=(id)=>{
console.log(id)
const listItems=items.filter((item)=>item.id!==id);
setandSaveItems(listItems)
}


const handleSubmit=(e)=>{
console.log('submitted')
e.preventDefault()
if (!newItem) return;
console.log(newItem)
setNewItem('')
additem(newItem)
}

  return (
 <div className='App'>
 <Header title='Groceries'/>
 <AddItem
 handleSubmit={handleSubmit}
 newItem={newItem}
 setNewItem={setNewItem}/>



 {/* <Header/> */}
 <SearchItem
 search={search}
 setSearch={setSearch}/>



 <Content  
 items={items.filter(item=>((item.item).toLowerCase().includes(search.toLowerCase())))}
 setItems={setItems}
 handleCheck={handleCheck}
 handleDelete={handleDelete}/>



 <Footer length={items.length}/>
 </div>
  );
}

export default App;

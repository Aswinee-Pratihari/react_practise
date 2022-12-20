import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa'
import ItemList from "./ItemList";
const Content = ({items,setItems,handleCheck,handleDelete}) => {
 
   
    return (
        <main>
            {items.length?(
           <ItemList
           items={items}
           handleCheck={handleCheck}
           handleDelete={handleDelete}/>
            ):(<h1>The list is empty</h1>)}
           
        </main>
    )
}

export default Content
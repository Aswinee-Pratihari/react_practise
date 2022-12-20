import { useState } from "react";

const Content = () => {
    const[name,setName]=useState('Aswinee') //array destructuring in usestate
    const [count,setCount]=useState(0)
    const handleNameChange = () => {
        const names = ['Aswinee', 'Kumar', 'Pratihari'];
        const int = Math.floor(Math.random() * 3);
        // return names[int];
        setName(names[int])
    }


    const handleClick=()=>{
        console.log('you clicked it')
        alert('you clicked it')
    }
    const handleClick2=()=>{
        // console.log('you clicked it')
        alert(`${name} clicked it`)
    }
    const handleClick3=(e)=>{
        
        console.log(e.target)
    }

    const Increament=()=>{
        
        setCount(count+1)
    }
    const Decreament=()=>{
        
        setCount(count-1)
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>handleClick2(handleNameChange())}>Get your name</button>
            <button onClick={(e)=>handleClick3(e)}>Get the event object</button>


            <button onClick={Increament}>Count+</button>
            <span>{count}</span>
            <button onClick={Decreament}>Count-</button>
        </main>
    )
}

export default Content
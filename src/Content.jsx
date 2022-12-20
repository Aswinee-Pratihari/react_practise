const Content = () => {
    const handleNameChange = () => {
        const names = ['Aswinee', 'Kumar', 'Pratihari'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }


    const handleClick=()=>{
        console.log('you clicked it')
        alert('you clicked it')
    }
    const handleClick2=(name)=>{
        // console.log('you clicked it')
        alert(`${name} clicked it`)
    }
    const handleClick3=(e)=>{
        
        console.log(e.target)
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>handleClick2(handleNameChange())}>Get your name</button>
            <button onClick={(e)=>handleClick3(e)}>Get the event object</button>
        </main>
    )
}

export default Content
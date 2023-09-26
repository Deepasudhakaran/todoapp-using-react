import React, { useEffect, useRef,useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import './Todo1.css';


const Todo = () => {
    const [todo , setTodo]=useState('')
    const [todos,setTodos]=useState([])
    
    const handleSubmit = (e) =>{
        e.preventDefault();


    }
    const addTodo= () =>{
        setTodos([...todos, {list : todo, id :Date.now()}])
        console.log (todos)
        setTodo('')
    }
    const inputRef=useRef('null')
    useEffect(()=>{
        inputRef.current.focus();
    })
    const onDelete= (id) =>{
       setTodos (todos.filter((to=> to.id !==id)) )
    }




  return (
    
    <div  className='container' align='left'>
    
      <h2>TODO</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todo} ref={inputRef} placeholder='Enter your todo' onChange={(event)=>setTodo(event.target.value)}/>
        <button onClick={addTodo}>Add</button>
        </form>
        <div className='list'>
             <ul align='left'>
                {
                todos.map((to) =>(

                <li className='form-control'>
                {to.list}
                <span className='list-items'>
                
                    <AiFillDelete   id='delete'  onClick={()=>onDelete(to.id)}/>
                
                </span>
                </li>
                
                
                ))
}
            </ul>
        
        </div>

    
    </div>
  )
}

export default Todo
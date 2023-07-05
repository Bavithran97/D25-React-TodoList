import React,{useState} from "react";
import Cards from "./Cards";

const Todolist = () =>{
    const [name, setname] = useState('');
    const [description,setdescription] = useState('');
    const [todo,settodo] = useState([]);
    const addtodo = () =>{
        const newtodo = {name,description, isEditing : false}
        settodo([...todo,newtodo])
         setname('')
         setdescription('') 
        
    } 
    const handleDelete = (name,description) =>{
      settodo(todo.filter((todo) => todo.name !== name || todo.description !== description))
    };
   const handleEdit =(name,index) =>{
        settodo(todo.map((todo,i) => i===index ? {...todo,name,isEditing: !todo.isEditing}:todo))
   };

    return(
    <div>
      <div className="header"> 
      <div><h3>My Todo</h3></div>
      <div className="input-button-container">
      <input onChange={e =>setname(e.target.value)} type="text" placeholder="Todo Name"/>
      <input onChange={e =>setdescription(e.target.value)} type="text" placeholder="Todo Description"/>
      <button onClick={addtodo}>Add Todo</button>
      </div>
      </div>
      <div className="section">
       <b>My Todos</b>
       <b>
            Status Filter: 
            <select>
            <option value="ALL">ALL</option>
            <option value="Completed">Completed</option>
            <option value="Not-Completed">Not-Completed</option>
            </select>
        </b>
      </div>
      <div className="container px-5 row">
        {todo.map((todos,index)=>(
            <Cards
             key={index}
             index = {index}
             name ={todos.name}
             description ={todos.description}
             ondelete = {handleDelete}
             edittodo = {handleEdit}
             />
        ))}
        </div>
     </div>
     );
};
export default Todolist;
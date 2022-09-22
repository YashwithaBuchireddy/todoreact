import React from "react"
import background from "../todo2.png"
import Navbar2 from '../components/Navbar2';
import { Button } from 'antd';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Createtodo(){

  const blankForm = {
    title: "",
    body: "",
  }
 
  const [size, setSize] = useState('small');
  const [todos, setTodos] = React.useState([])

  const [createForm, setCreateForm] = React.useState(blankForm)

 
  const [updateForm, setUpdateForm] = React.useState(blankForm)


  const getTodos = async () => {
  
    const response = await fetch("http://localhost:3000/todos")

    const data = await response.json()
   
    setTodos(data)
  }

 
  const TodosLoaded = () => (
    <>
      {todos.map(todo => (
        <div>
        
    
        <h5><span class="badge text-bg-dark"> {todo.title}</span> -{todo.body}</h5>
        
        <button type="button" class="btn btn-outline-dark mx-3" onClick={() => setUpdateForm(todo)} >Edit</button>
        <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(todo)}>Delete</button>
        </div>
      ))}
    </>
  )


  const noTodos = <h2>No Todos</h2>


  const handleCreateChange = event => {

    setCreateForm({ ...createForm, [event.target.name]: event.target.value })
  }

  const handleCreate = async event => {
    
    event.preventDefault()
    
    const response = await fetch("http://localhost:3000/todos", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createForm),
    })

    await getTodos()
    
    setCreateForm(blankForm)
  }

  const handleUpdateChange = event => {
    
    setUpdateForm({ ...updateForm, [event.target.name]: event.target.value })
  }

  const handleUpdate = async event => {
  
    event.preventDefault()
   
    const response = await fetch(
      "http://localhost:3000/todos/" + updateForm.id,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateForm),
      }
    )
   
    await getTodos()
    
    setUpdateForm(blankForm)
  }

  const handleDelete = async todo => {
    
    const response = await fetch("http://localhost:3000/todos/" + todo.id, {
      method: "delete",
    })
    
    await getTodos()
  }

  React.useEffect(() => {
    getTodos()
  }, [])


  return (
    <>
      <Navbar2 />
      <div className="App"
        style={{
          //textAlign: "center",
          // maxWidth: "1300px",
          // maxHeight: "2600px",
          margin: "0 auto",
          border: "0px solid",
          padding: "50px 25px",
          marginTop: "0px",
          //textAlign: "top",
          backgroundImage: `url(${background})`
        }}>
        
        <body
          style={{ backgroundImage: `url(${background})` ,
         // padding: "150px 25px",
          textAlign: "center",
          marginTop: "0px"
        
          
          
          
          }}>
        <h3>  <i>Create a To-do</i></h3>


          <form onSubmit={handleCreate}>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={createForm.title}
              onChange={handleCreateChange} />
            <input
              type="text"
              name="body"
              placeholder="Enter task"
              value={createForm.body}
              onChange={handleCreateChange} />

            <input type="submit" value="Create Todo" />
          </form>
          <h3><i>Update a To-do</i></h3>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={updateForm.title}
              onChange={handleUpdateChange} />
            <input
              type="text"
              name="body"
              placeholder="Enter task"
              value={updateForm.body}
              onChange={handleUpdateChange} />

            <input type="submit" value="Update Todo" />
          </form>
          <br></br>
        <h3> <p class="text-light bg-dark">To do lists</p></h3> 
          {todos.length > 0 ? TodosLoaded() : noTodos}
        </body>

      </div>
      </>
  )
 
}


export default Createtodo;

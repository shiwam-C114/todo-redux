import React,{useState} from 'react'
import Todo from "./Todo";
import { Input,Button,Checkbox } from '@chakra-ui/react'

const initTodo={
  task:"",
  status:false
}

function Home() {
  const [todo, setTodo] = useState(initTodo)
  const handleChange = (event) => setTodo({...todo,task:event.target.value})
  function addTodo() {
    fetch('http://localhost:8080/todos',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo) // body data type must match "Content-Type" header  
    })
  }
  return (
    <div>
      <Input value={todo.task} onChange={handleChange} placeholder='add todo' m="0 20px" width="300px" />
      <Button onClick={addTodo} colorScheme='blue'>Add Todo</Button>     
      <Todo/>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,

  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Todo() {
    const [data, setData] = useState([])
    function getData() {
        fetch('http://localhost:8080/todos').then(r=>r.json()).then(setData)
    }
    useEffect(() => {
      getData()
    
    }, [])
    
  return (
    <div>

            <TableContainer>
            <Table colorScheme="red" variant='simple'>
              <TableCaption>Todo App</TableCaption>
              <Thead>
                <Tr>
                  <Th>Task</Th>
                  <Th >status</Th>
                  <Th >More Details</Th>
                </Tr>
              </Thead>
              <Tbody>
        {data?.map((item)=>(

                <Tr>
                  <Td>{item.task}</Td>
                  <Td >{item.status?"done":"pending"}</Td>  
                  <Td ><Link to={`/todo/${item.id}`} color={"teal.400"}> More details</Link></Td>
                </Tr>
                
                ))}
                </Tbody>
             
            </Table>
          </TableContainer>
        
    </div>
  )
}

export default Todo
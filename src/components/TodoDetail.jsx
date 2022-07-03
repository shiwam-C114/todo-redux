import { Badge, Flex,Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  function getPage() {
    fetch(`http://localhost:8080/todos/${id}`)
      .then((r) => r.json())
      .then(setData).catch(console.log);
  }
  useEffect(() => {
    getPage();
  }, []);

  return (
    <div>
      {
        <Flex justifyContent={"space-around"}>
            {
                data.id != null
                ?
                <>
                <Badge fontSize="6xl" color={"blue.400"} >task: {data.task}</Badge>
                <Badge fontSize="6xl"  >status: {data.status?"complete":"pending"}</Badge>
                <Button onClick fontSize="3xl" p="20px">toggle status</Button>
                </>
                :
                <Badge fontSize="6xl" color={"red.400"}> page not found</Badge>
            }
        </Flex>
      }
    </div>
  );
}

export default TodoDetail;

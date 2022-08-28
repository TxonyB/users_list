import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User } from './User';

const Tasks = (props:any) => {
  const [todos, setTodos] = useState([
		{ id: 1, title: "tarefa", completed: false },
		{ id: 2, title: "tarefa", completed: true },
	]);
  let params = useParams(); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
      .then((response) => response.json())
      .then((json) => {setTodos(json);});
  });
  
  
  return (
    <div>
      <h1>Tasks de {}</h1>
      
    </div>
  );
}

export default Tasks;
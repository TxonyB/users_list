import * as React from 'react';
import { useState, useEffect } from 'react';


const Tasks = (props:any) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "" },
		{ id: 2, title: "" },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((json) => {setTodos(json);});
  });
  
  return (
    <div>
      <ul>
        {todos.map((todo) => ( 
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Task List</h1>
      <ul>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id}>
              {task.name} - {task.completed ? 'Completed' : 'Pending'}
            </li>
          ))
        ) : (
          <p>Loading tasks...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
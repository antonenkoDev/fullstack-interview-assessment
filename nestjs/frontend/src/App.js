import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Intentional issue: Missing TypeScript and proper interfaces
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Intentional issue: Missing priority field in form state
  const [status, setStatus] = useState('TODO');
  // Intentional issue: Missing loading and error states

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    // Intentional issue: No error handling
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/tasks`);
    setTasks(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Intentional issue: No form validation
    // Intentional issue: No error handling
    await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
      title,
      description,
      status,
    });
    setTitle('');
    setDescription('');
    setStatus('TODO');
    fetchTasks();
  };

  return (
    // Intentional issue: Missing proper styling and CSS
    <div>
      <h1>Task Management</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          />
        </div>
        <div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        {/* Intentional issue: Missing priority field in form */}
        <button type="submit">Add Task</button>
      </form>

      {/* Intentional issue: No loading indicator */}
      {/* Intentional issue: No error message display */}
      <div>
        {tasks.map((task) => (
          // Intentional issue: Missing key prop
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            {/* Intentional issue: Not displaying priority */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

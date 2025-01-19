import React, { useState } from 'react';
import axios from 'axios';

// Missing type definitions
const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Missing priority field state

  // Incorrect API endpoint and no error handling
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/tasks', {
        title,
        description,
        // Missing priority field
      });
      setTitle('');
      setDescription('');
    } catch (error) {
      // No error handling
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      {/* Missing priority select field */}
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;

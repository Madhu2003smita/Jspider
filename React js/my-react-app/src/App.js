// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// import React, { useState } from 'react';

// function App() {
//   // State to hold the text
//   const [text, setText] = useState("Hello, World!");

//   // Function to handle the button click
//   const handleClick = () => {
//     setText("You clicked the button!");
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>{text}</h1>
//       <button 
//         onClick={handleClick} 
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           cursor: 'pointer',
//           borderRadius: '5px',
//           border: '1px solid #ddd',
//           backgroundColor: '#007BFF',
//           color: '#fff'
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import NewPage from './NewPage';

// function App() {
//   return (
//     <Router>
//       <div>
//         <h1>React js</h1>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/new-page" element={<NewPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add task function
  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  // Delete task function
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Task Manager</h1>
      
      {/* Input to add new task */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={styles.input}
      />
      <button onClick={addTask} style={styles.button}>Add Task</button>

      {/* Display tasks */}
      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <span
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleCompletion(task.id)} style={styles.completionButton}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '70%',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  taskList: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  taskText: {
    fontSize: '18px',
    flex: '1',
  },
  completionButton: {
    padding: '5px 10px',
    marginRight: '10px',
    cursor: 'pointer',
    backgroundColor: '#FFD700',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  deleteButton: {
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#FF6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default App;

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
// App.js
import React from 'react';
//import Resturant from '../src/Resturant';
import Homepage from './Home/Homepage';
function App() {
  return (
    <div>
      <Homepage/>
    </div>
  );
}

export default App;


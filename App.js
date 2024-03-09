import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NewWindow from './NewWindow';

const App = () => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handlePasswordSubmit = async () => {
    const response = await fetch('http://localhost:5000/check-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    console.log(data)
    setIsValidPassword(data.isValidPassword);

    if (data.isValidPassword) {
      // Use the Navigate component for programmatic navigation
      return <Navigate to={`/new-page/${password}`} />;
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Enter Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePasswordSubmit}>Submit</button>
          </p>
        </header>

        <Routes>
          {/* Use a Route to render the NewWindow component */}
          <Route path="/new-page/:password" element={<NewWindow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

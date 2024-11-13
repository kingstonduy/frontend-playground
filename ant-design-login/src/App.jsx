import { useState } from 'react';
import LoginPage from './Login'; // Assuming LoginPage is the component you created for the login

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} /> // Pass the login handler to LoginPage
      ) : (
        <>
            <h1>Welcome to the app!</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </>
      )}
    </>
  );
}

export default App;

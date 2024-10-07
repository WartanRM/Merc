import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className='auth-wrapper'>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      </div>
  );
};

export default Login;

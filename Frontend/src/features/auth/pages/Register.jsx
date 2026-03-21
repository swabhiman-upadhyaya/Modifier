import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading, handleRegister } = useAuth();
  
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ username, email, password });
    navigate("/")
  }

  return (
    <main>
      <div className="register-page">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <FormGroup
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormGroup
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormGroup
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='register-button button'>Register</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </main>
  )
}
export default Register
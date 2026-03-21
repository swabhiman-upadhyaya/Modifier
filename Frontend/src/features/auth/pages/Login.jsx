import React, {useState} from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/login.scss"
import { Link } from 'react-router-dom'
import { useAuth } from './../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  if(loading) {
    return <h1>Loading...</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleLogin({email, password})
    navigate("/")
  }

  return (
    <main>
      <div className="login-page">
        <div className="form-container">

          <form onSubmit={handleSubmit}>
            <FormGroup value={email} 
            onChange={(e) => setEmail(e.target.value)}
            label="Email" placeholder="Enter your email" />

            <FormGroup value={password} 
            onChange={(e) => setPassword(e.target.value)}
            label="Password" placeholder="Enter your password" />
            <button type="submit" className='login-button button'>Login</button>
          </form>

          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </main>
  )
}

export default Login
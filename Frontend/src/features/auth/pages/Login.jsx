import React from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/login.scss"
import { Link } from 'react-router-dom'
import { useAuth } from './../hooks/useAuth';

const Login = () => {

  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main>
      <div className="login-page">
        <div className="form-container">

          <form onSubmit={handleSubmit}>
            <FormGroup value={email} onChange={(e) => {e.target.value}}
            label="Email" placeholder="Enter your email" />

            <FormGroup value={password} onChange={(e) => {e.target.value}}
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
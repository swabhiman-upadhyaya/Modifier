import React from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main>
      <div className="login-page">
          <h1>Login</h1>
        <div className="form-container">
          <form>
            <FormGroup label="Email" placeholder="Enter your email" />
            <FormGroup label="Password" placeholder="Enter your password" />
            <button type="submit" className='login-button button'>Login</button>
          </form>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </main>
  )
}

export default Login
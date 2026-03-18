import React from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main>
      <div className="register-page">
        <div className="form-container">
          <form>
            <FormGroup label="Username" placeholder="Enter your username" />
            <FormGroup label="Email" placeholder="Enter your email" />
            <FormGroup label="Password" placeholder="Enter your password" />
            <button type="submit" className='register-button button'>Register</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </main>
  )
}

export default Register

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setLoginData({
      ...loginData, 
      [name]: value 
    });

  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(loginData);
    
  }
  return (
    <div className="login-bg">
    
      <div className="form-container">
      <h2 className='text-center'>Let’s Sign In</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            name="email" 
            value ={loginData.email}
            onChange={handleChange} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password" 
            value ={loginData.password}
            onChange={handleChange} 
          />
        </Form.Group>


        <div className="text-center">
          <Button variant="primary" type="submit" className='text-end'>
          Sign In
          </Button>
        </div>
       </Form>
       <div className="text-center">
        <p className="d-inline">Don't have an account? </p>
        <Link to='/register'> Sign Up</Link>
       </div>
      </div>
    </div>
  )
}

export default Login

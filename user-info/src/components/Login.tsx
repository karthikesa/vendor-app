
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../App.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login-bg">
    
      <div className="form-container">
      <h2 className='text-center'>Let’s Sign In</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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

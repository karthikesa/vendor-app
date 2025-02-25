import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../App.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login-bg">
      
      <div className="form-container">
      <h2 className='text-center'>Let’s Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the terms and conditions" />
        </Form.Group>

        <div className="text-center ">
          <Button variant="primary" type="submit" className='text-end'>
            Sign Up
          </Button>
        </div>
       </Form>
       <div className='text-center'>
        <p className="d-inline ">Already have an account?  </p>
        <Link to='/'>Sign In </Link>
       </div>
      </div>
    </div>
  )
}

export default Register

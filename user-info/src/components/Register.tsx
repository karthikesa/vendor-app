import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../App.css'
import { Link } from 'react-router-dom';

const Register = () => {

  const [signUp, setSignUp] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(signUp);
    
  }

  return (
    <div className="login-bg">
      <div className="form-container">
        <h2 className='text-center'>Let’s Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name='fname'
              value={signUp.fname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name='lname'
              value={signUp.lname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name='email'
              value={signUp.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name='password'
              value={signUp.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name='cpassword'
              value={signUp.cpassword}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to the terms and conditions" />
          </Form.Group>

          <div className="text-center">
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
  );
};

export default Register;

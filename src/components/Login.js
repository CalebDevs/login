import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(res.data);
      // Handle the response, e.g., store the token in local storage
    } catch (err) {
      console.error(err);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
              <p className='text-white-50 mb-5'>Please enter your login and password!</p>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  label='Email address'
                  id='formControlLg'
                  type='email'
                  size='lg'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  label='Password'
                  id='formControlLg'
                  type='password'
                  size='lg'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className='small mb-3 pb-lg-2'>
                  <a className='text-white-50' href='#!'>
                    Forgot password?
                  </a>
                </p>
                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type='submit'>
                  Login
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;

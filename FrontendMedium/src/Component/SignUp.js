import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; 
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [show, setShow] = useState(false);
  

    const navigate=useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.clear();
      const response = await axios.post('http://127.0.0.1:8000/create/author', formData);
      // Assuming the API responds with a success message or user data

      console.log('Sign-up successful:', response.data);
      // Reset the form after successful sign-up
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      navigate('/');
    } catch (error) {
      // Handle any errors that occur during sign-up
      console.error('Sign-up failed:', error);
    }
  };

  return (


    <div className="signup">
    <form className="signup__container" onSubmit={handleSubmit}>
      <h2 className='signup__signin'>Sign up</h2>
      
      <div className='signup__label'>User Name</div>
     
           
 
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    required
  />
          

      <div className='signup__label'>Email</div>
     

  <input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleInputChange}
  required
/>
      

      <div className='signup_label signup_password'>
        <span>Password</span>
        <span onClick={()=>setShow(p=>!p)}>{show ? 'hide': 'show'}</span>
      </div>
        
            
  <input
   autoComplete='off' type={show ? 'text' : 'password'} 
  // type="password"
  id="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  required
/>
           
        <button type="submit">Sign Up</button>
        
      
    </form>
  </div>
  );
};
export default SignUp;

import React, { useState, useEffect } from 'react';
import QuadLogo from '../assets/QuadLogo.jpg'

function Auth(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user details are stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // If user details exist, parse and set them in state
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    // Simulated login action
    const userDetails = { id: 1, name: 'John Doe', email: 'john@example.com' };
    // Store user details in localStorage
    localStorage.setItem('user', JSON.stringify(userDetails));
    // Update state with user details
    setUser(userDetails);
    props.usr(true);
  };

  // const handleLogout = () => {
  //   // Remove user details from localStorage
  //   localStorage.removeItem('user');
  //   // Clear user state
  //   setUser(null);
  //   props.usr(false);
  // };

  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center bg-gradient-to-r from-[#fef696] to-[#e1ce00] shadow-2xl shadow-gray-500'>
      {/* {user ? (
        <div className='w-[40%] bg-white rounded-lg p-4 flex flex-col items-center'>
          <img src={QuadLogo} className='mb-5' />
          <p className='font-bold mb-3'>Welcome, {user.name}</p>
          <button className='btn' onClick={handleLogout}>Logout</button>
        </div>
      ) : ( */}
      <div className='w-[40%] bg-white rounded-lg p-4 flex flex-col items-center'>
        <img src={QuadLogo} className='mb-5' />
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
      {/* )} */}
    </div>
  );
}

export default Auth;

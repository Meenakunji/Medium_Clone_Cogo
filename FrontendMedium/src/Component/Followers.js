import React from 'react';
import './Followers.css'; // Import your CSS file for styling

// Fake follower data
const fakeFollowers = [
  { id: 1, name: 'Mohit', email: 'mohit@example.com' },
  { id: 2, name: 'Anuj', email: 'anuj@example.com' },
  { id: 3, name: 'komal', email: 'komal@example.com' },
  {id: 4, name: 'manish', email: 'manish@example.com'},
  {id: 5, name: 'goyal', email: 'goyal@example.com'},
  // ... add more fake followers here
];

function Followers() {
  return (
    <div className="followers-container">
      <h2>Followers </h2>
      {fakeFollowers.map(follower => (
        <div key={follower.id} className="follower-item">
          <div className="serial-number">{follower.id}</div>
          <i class="fa fa-user fa-lg"></i>
          <div className="follower-details">
            <div className="name">{follower.name}</div>
            <div className="email">{follower.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Followers;

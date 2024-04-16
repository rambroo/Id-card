// UserProfile.js
import React, { useState, useEffect } from 'react';
import UserProfileCard from './components/UserProfileCard';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        setUserData(data.results[0]);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="container ">
      {userData ? (
        <UserProfileCard user={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;

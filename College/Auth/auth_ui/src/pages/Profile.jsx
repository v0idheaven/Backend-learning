import React, { useState, useEffect } from 'react';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        
        const enhancedData = {
          ...data,
          name: "Thor",
          avatar: 'https://i.etsystatic.com/50159427/r/il/ed3d1b/5756805790/il_1588xN.5756805790_coe2.jpg',
          godOf: 'Thunder'
        };

        setUserData(enhancedData);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {userData ? (
        <div className="user-data-section">
          <h2>User Information</h2>
          <img src={userData?.avatar} alt="Avatar" style={{ height: '300px', width: '300px' }} />
          <p><strong>Name:</strong> {userData?.name}</p>
          <p><strong>GodOf:</strong> {userData?.godOf}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Profile;
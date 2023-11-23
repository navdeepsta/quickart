import React from 'react';

const UserProfileInfo = ({ user, onEdit }) => {
  return (
    <div>
      <img src={user.profilePic} alt="Profile" style={{width:200, height:200}}/>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Address: {user.address}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
      <p>Email: {user.email}</p>
      <p>Payment Details: {user.paymentDetails}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default UserProfileInfo;

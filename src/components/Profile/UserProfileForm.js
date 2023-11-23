import React, { useState, useEffect } from "react";

const UserProfileForm = ({ user, onSave }) => {  
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [file, setFile] = useState();
  const {
    firstName,
    lastName,
    profilePic,
    address,
    mobileNumber,
    email,
    paymentDetails,
  } = updatedUser;

  useEffect(() => {
    if (file) {
      setUpdatedUser((prevUser) => ({
        ...prevUser,
        profilePic: file,
      }));
    }
  }, [file]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    onSave(updatedUser);
  };

  return (
    <div>
      <div>
        <h2>Add Image:</h2>
        <input type="file" onChange={handleImageChange} />
        <img
          src={profilePic}
          alt="Profile"
          style={{ width: 200, height: 200 }}
        />
      </div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={firstName ? firstName : ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={lastName ? lastName : ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={address ? address : ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Mobile:
        <input
          type="text"
          name="mobileNumber"
          value={mobileNumber ? mobileNumber : ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email ? email : ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Payment Details:
        <input
          type="text"
          name="paymentDetails"
          value={paymentDetails ? paymentDetails : ""}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserProfileForm;

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./UserProfileForm.css";

const UserProfileForm = ({ user, onSave }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [file, setFile] = useState();
  const { firstName, lastName, profilePic, mobileNumber, email } = updatedUser;

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
    <div className="profile-form-container">
      <TextField type="file"  onChange={handleImageChange} />
      <div>
        {file ? <img
          src={profilePic}
          alt="Profile"
          style={{ width: 150, height: 150 }}
        /> : <AccountCircleRoundedIcon fontSize="large" color="primary"/>}
      </div>
      <div>
        <TextField
          type="text"
          name="firstName"
          placeholder="Firstname"
          aria-label="Firstname"
          value={firstName ? firstName : ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="lastName"
          placeholder="Lastname"
          aria-label="Lastname"
          value={lastName ? lastName : ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="mobileNumber"
          placeholder="Mobile"
          aria-label="Mobile"
          value={mobileNumber ? mobileNumber : ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="email"
          placeholder="Email"
          aria-label="Email"
          value={email ? email : ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button onClick={handleSave} variant="outlined">Save</Button>
      </div>
    </div>
  );
};

export default UserProfileForm;

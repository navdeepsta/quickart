import React, { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import UserProfileInfo from "./UserProfileInfo";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Profile({ user, loggedIn, updateUser, onLogout }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (updatedUser) => {
    updateUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "5px",
          marginBottom: "10px",
          gap:4
        }}
      >
        <Link to="/" state={{ loggedIn: loggedIn, user: user }}>
          <Button size="small" variant="outlined">
            Home
          </Button>
        </Link>
        <Button
          onClick={onLogout}
          size="small"
          variant="outlined"
          color="error"
        >
          Logout
        </Button>
      </nav>
      {isEditing ? (
        <UserProfileForm user={user} onSave={handleSaveClick} />
      ) : (
        <UserProfileInfo user={user} onEdit={handleEditClick} />
      )}
    </>
  );
}

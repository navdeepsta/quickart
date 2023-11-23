import React, { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import UserProfileInfo from "./UserProfileInfo";
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
    <div>
      <h1>User Profile</h1>
      <Link to="/" state={{ loggedIn: loggedIn, user: user }}>
        Go to Homepage
      </Link>
      <button onClick={onLogout}>Logout</button>
      {isEditing ? (
        <UserProfileForm user={user} onSave={handleSaveClick} />
      ) : (
        <UserProfileInfo user={user} onEdit={handleEditClick} />
      )}
    </div>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import "./UserProfileInfo.css";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Button from "@mui/material/Button";
const UserProfile = ({ user, onEdit }) => {
  return (
    <>
      <Grid container spacing={2} my={2}>
        <Grid item xs={12} >
          <div className="profile-container">
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt="Profile"
              />
            ) : (
              <AccountCircleRoundedIcon fontSize="large" color="primary" />
            )}
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>
              <span className="icon"><PhoneIcon color="primary"/></span> {user.mobileNumber ? user.mobileNumber : "Mobile Number"}
            </div>
            <div>
            <span className="icon"><AlternateEmailIcon color="primary"/></span> {user.email ? user.email : "Email Address"}
            </div>
            <div>
              <Button onClick={onEdit} variant="outlined">Edit Profile</Button>
            </div>
          </div>
        </Grid>

      </Grid>
    </>
  );
};

export default UserProfile;

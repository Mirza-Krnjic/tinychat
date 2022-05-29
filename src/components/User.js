import React from "react";
import defImg from "../images/Mirza-profile.png";

function User({ user }) {
  return (
    <div className="user_wrapper">
      <div className="user_info">
        <div className="user_detail">
          <img src={user.avatar || defImg} alt="avatar" className="avatar" />
          <h4>{user.name}</h4>
        </div>
        <div
          className={`user_status ${user.isOnline ? "online" : "offline"}`}
        ></div>
      </div>
    </div>
  );
}

export default User;

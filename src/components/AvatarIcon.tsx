import React from "react";
import "./AvatarIcon.css";

export interface AvatarProps {
  avatar: string;
  username: string;
}

const AvatarIcon = ({ avatar, username }: AvatarProps) => {
  return (
    <img
      alt="avatar"
      className="avatar"
      src={avatar}
      style={{ cursor: "pointer" }}
    />
  );
};

export default AvatarIcon;

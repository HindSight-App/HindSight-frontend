import React from "react";
import "./AvatarIcon.css";

export interface AvatarProps {
  image: string;
}

const AvatarIcon = ({ image }: AvatarProps) => {
  return <img alt="avatar" className="avatar" src={image} />;
};

export default AvatarIcon;

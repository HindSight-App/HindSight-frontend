import React from "react";
import { getProfile } from "../services/AuthUtils";
import "./AvatarIcon.css";
import { useHistory } from "react-router";

export interface AvatarProps {
  avatar: string;
  username: string;
}

const AvatarIcon = ({ avatar, username }: AvatarProps) => {
  const { push } = useHistory();
  async function handleProfile() {
    const profile = await getProfile();
    if (username === profile.username){
      push('/profile')
    }
  }
  return <img alt="avatar" className="avatar" src={avatar} onClick={handleProfile} style={{cursor: 'pointer'}}/>;
};

export default AvatarIcon;

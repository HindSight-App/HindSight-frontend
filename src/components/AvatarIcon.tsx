import React, { FC } from "react";
import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
  IonAvatar,
} from "@ionic/react";
import "./AvatarIcon.css";

export interface AvatarProps {
  image: string;
}

const AvatarIcon = ({ image }: AvatarProps) => {
  return (
    <IonAvatar>
      <img alt="avatar" src={image} />
    </IonAvatar>
  );
};

export default AvatarIcon;

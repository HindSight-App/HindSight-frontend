import React from "react";
import "./PostEl.css";
import { Post } from "../Types/types";
import { IonButton } from "@ionic/react";
import { deleteById } from "../services/AuthUtils";


const PostEl = ({
  id, 
  title,
  description,
  type,
  visability,
  datetime }: Post) => {
    async function handleDelete() {
      await deleteById(id);
    }
      return (
      <div className={type}>
        <h1>{title}</h1>
        <p>{description}</p>
        <IonButton onClick={handleDelete}>Delete</IonButton>
      </div>
      )
    };

export default PostEl;

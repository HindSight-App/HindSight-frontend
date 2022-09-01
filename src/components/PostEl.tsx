import React from "react";
import "./PostEl.css";
import { Post } from "../Types/types";
import { IonGrid, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding } from "@ionic/react";
import { deleteById } from "../services/AuthUtils";
import { trashSharp } from "ionicons/icons";


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
        <IonItemSliding>
        <IonItem>
            <IonGrid >                
                <h1>{title}</h1>
                <p>{description}</p>
            </IonGrid>
        </IonItem>
        <IonItemOptions side="end">
        <IonItemOption onClick={handleDelete}><IonIcon icon={trashSharp}></IonIcon></IonItemOption>
        </IonItemOptions>
            </IonItemSliding>  
      )
    };

export default PostEl;

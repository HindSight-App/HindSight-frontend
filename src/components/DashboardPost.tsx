import "./DashboardPost.css";
import { Post } from "../Types/types";
import { IonButton, IonGrid, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding } from "@ionic/react";
import { addKarma, deleteById, getProfileById } from "../services/AuthUtils";
import { thumbsUpOutline } from "ionicons/icons";


const DashboardPost = ({
  id, 
  title,
  description,
  type,
  user_id
 }: Post) => {
    async function handleUpvote() {
        const user = await getProfileById(user_id);
        console.log(user)
        const newKarma = user.karma++;
        await addKarma(user_id, newKarma)
        console.log(user)

    }
      return (
        <IonItemSliding>
        <IonItem className={`${type} dashbord-post`}>
            <IonGrid className={type}>
                <h1>{title}</h1>
                <p>{description}</p>
            </IonGrid>
        </IonItem>
        <IonItemOptions side="end">
        <IonItemOption onClick={handleUpvote}><IonIcon icon={thumbsUpOutline}></IonIcon></IonItemOption>
        </IonItemOptions>
            </IonItemSliding>    
      )
    };

export default DashboardPost;

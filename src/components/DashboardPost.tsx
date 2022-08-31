import "./DashboardPost.css";
import { Post, Profile } from "../Types/types";
import { IonGrid, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding } from "@ionic/react";
import { addKarma, getProfileById } from "../services/AuthUtils";
import { thumbsUpOutline } from "ionicons/icons";
import AvatarIcon from "./AvatarIcon";
import { useEffect, useState } from "react";


const DashboardPost = ({
  id, 
  title,
  description,
  type,
  user_id,
 }: Post  ) => {
    const [profile, setProfile] = useState<Profile>()
    async function handleUpvote() {
        const user = await getProfileById(user_id);
        console.log(user)
        const newKarma = user.karma++;
        await addKarma(user_id, newKarma)
        console.log(user)
    }
    useEffect(() => {
      async function getProfile(){
        const results = await getProfileById(user_id);
        setProfile(results);
      }
      getProfile()
    }, [user_id])
    if (!profile) {
      return null;
    }
      return (
        <IonItemSliding>
        <IonItem className={`${type} dashbord-post`}>
            <IonGrid >
              <div className="avatar">
                <AvatarIcon  {...profile} />
                {profile.username}'s {type}
              </div>
                
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

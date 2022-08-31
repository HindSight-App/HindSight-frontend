import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRow,
  IonCol,
  IonGrid,
  IonButtons,
  IonFooter
} from "@ionic/react";
import "./Personal-Profile.css";
import AvatarIcon from "../../components/AvatarIcon";
import { getProfile } from "../../services/AuthUtils";
import { useEffect, useState } from "react";
import { Profile } from "../../Types/types";
import Tabs from "../../components/Tabs";
import PostList from "../../components/PostList";
import { client } from "../../services/client";

function PersonalProfile() {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    let subscription:any = null;
    async function loadProfile() {
      const { id, created_at, user_id, username, karma, avatar } =
        await getProfile();
      setProfile({ id, created_at, user_id, username, karma, avatar });
      subscription = client
        .from(`Profile:user_id=eq.${user_id}`)
        .on('UPDATE', async (payload) => {
          console.log('Change received!', payload)
          setProfile(payload.new);
        })
        .subscribe();
    }
    loadProfile();
    return () => {client.removeSubscription(subscription)}
  }, []);
  if (!profile) {
    return null;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="new-background-color">
          <IonButtons slot="start"></IonButtons>
          <IonTitle>{profile.username}'s Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="new-background-color">
        <IonGrid className="grid-Dreams-page ion-justify-content-center ion-align-items-center ion-text-center">
          <IonRow>
            <IonCol>
              <AvatarIcon {...profile} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>Upvotes: {profile.karma}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <PostList {...profile}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
}

export default PersonalProfile;

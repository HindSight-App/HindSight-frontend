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
  const [profile, setProfile] = useState<Profile>({
    id: 0,
    created_at: "",
    user_id: "",
    username: "",
    karma: 0,
    avatar: "",
  });

  useEffect(() => {
    async function loadProfile() {
      const { id, created_at, user_id, username, karma, avatar } =
        await getProfile();
      setProfile({ id, created_at, user_id, username, karma, avatar });
      await client
        .from('*')
        .on('*', async (payload) => {
          const { id, created_at, user_id, username, karma, avatar } = await getProfile();
          setProfile({id, created_at, user_id, username, karma, avatar});
        })
        .subscribe();
    }
    loadProfile();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"></IonButtons>
          <IonTitle>{profile.username}'s Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="new-background-color">
        <IonGrid className="grid-Dreams-page ion-justify-content-center ion-align-items-center ion-text-center">
          <IonRow>
            <IonCol>
              <AvatarIcon image={profile.avatar} />
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

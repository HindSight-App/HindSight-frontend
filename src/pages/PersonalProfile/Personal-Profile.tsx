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
} from "@ionic/react";
import "./Personal-Profile.css";
import AvatarIcon from "../../components/AvatarIcon";
import { getProfile } from "../../services/AuthUtils";
import { useEffect, useState } from "react";
import { Profile } from "../../Types/types";

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
    }
    loadProfile();
  }, []);

  console.log("profile", profile);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"></IonButtons>
          <IonTitle>Personal Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="new-background-color">
        <IonGrid className="grid-Dreams-page ion-justify-content-center ion-align-items-center ion-text-center">
          <IonRow>
            <IonCol>
              <AvatarIcon image={profile.avatar} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>{profile.username}</IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>{profile.karma}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default PersonalProfile;

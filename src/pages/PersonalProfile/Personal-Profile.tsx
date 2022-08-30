import {
  IonContent,
  IonPage,
  IonItem,
  IonHeader,
  IonToolbar,
  IonList,
  IonTitle,
  IonLabel,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonFooter,
  IonButtons,
  IonAvatar,
} from "@ionic/react";
import "./Personal-Profile.css";
import { useParams } from "react-router";
import AvatarIcon from "../../components/AvatarIcon";
import { AvatarProps } from "../../components/AvatarIcon";
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
      <AvatarIcon image={profile.avatar} />
    </IonPage>
  );
}

export default PersonalProfile;

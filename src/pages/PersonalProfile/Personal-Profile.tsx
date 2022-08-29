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
import "./PersonalProfile.css";
import { useParams } from "react-router";
import AvatarIcon from "../../components/AvatarIcon";

function PersonalProfile() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"></IonButtons>
          <IonTitle>Idea Create Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <AvatarIcon image={Image} />
    </IonPage>
  );
}

export default PersonalProfile();

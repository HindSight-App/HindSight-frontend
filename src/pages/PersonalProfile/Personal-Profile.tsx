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

      <IonContent>
        <IonAvatar>
          <img src={image} />
        </IonAvatar>
      </IonContent>

      <AvatarIcon image={image} />
    </IonPage>
  );
}

export default PersonalProfile();

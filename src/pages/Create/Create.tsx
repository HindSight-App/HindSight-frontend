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
} from "@ionic/react";

import "./Create.css";
import { bulb, moon, recordingSharp, cloudySharp } from "ionicons/icons";
import Tabs from "../../components/Tabs";


function CreatePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="new-background-color">
          <IonTitle>Create Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/create/ideas" className="ideas-page">
            <IonGrid>
              <IonRow class="ion-justify-content-between">
                <IonCol size="auto">
                  <IonLabel
                    className="create-buttons"
                    class="ion-text-align-left"
                  >
                    Ideas
                  </IonLabel>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={bulb} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem routerLink="/create/dreams" className="dreams-page">
            <IonGrid>
              <IonRow class="ion-justify-content-between">
                <IonCol size="auto">
                  <IonLabel
                    className="create-buttons"
                    class="ion-text-align-left"
                  >
                    Dreams
                  </IonLabel>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={moon} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem routerLink="/create/memories" className="memories-page">
            <IonGrid>
              <IonRow class="ion-justify-content-between">
                <IonCol size="auto">
                  <IonLabel
                    className="create-buttons"
                    class="ion-text-align-left"
                  >
                    Memories
                  </IonLabel>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={recordingSharp} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem routerLink="/create/thoughts" className="thoughts-page">
            <IonGrid>
              <IonRow class="ion-justify-content-between">
                <IonCol size="auto">
                  <IonLabel
                    className="create-buttons"
                    class="ion-text-align-left"
                  >
                    Thoughts
                  </IonLabel>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={cloudySharp} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
}

export default CreatePage;

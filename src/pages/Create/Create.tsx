import {
  IonContent,
  IonPage,
  IonItem,
  IonHeader,
  IonToolbar,
  IonList,
  IonTitle,
  IonLabel,
  IonCol,
} from "@ionic/react";

import "./Create.css";

function CreatePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonCol>
            <IonItem
              fill="solid"
              routerLink="/create/ideas"
              className="ideas-page"
            >
              <IonLabel
                className="create-buttons"
                class="ion-justify-content-center"
              >
                Ideas
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/create/dreams" className="dreams-page">
              <IonLabel className="create-buttons">Dreams</IonLabel>
            </IonItem>
            <IonItem routerLink="/create/memories" className="memories-page">
              <IonLabel className="create-buttons">Memories</IonLabel>
            </IonItem>
            <IonItem routerLink="/create/thoughts" className="thoughts-page">
              <IonLabel className="create-buttons">Thoughts</IonLabel>
            </IonItem>
          </IonCol>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default CreatePage;

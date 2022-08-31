import {
  IonContent,
  IonPage,
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
import { useHistory } from "react-router";

function CreatePage() {
  const { push } = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="new-background-color">
          <IonTitle>Create Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonGrid>
            <div onClick={() => push("/create/ideas")}>
              <IonRow class="ideas-button ion-justify-content-around">
                <IonCol size="auto">
                  <div className="create-buttons">Ideas</div>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={bulb} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </div>
          </IonGrid>
          <IonGrid>
            <div onClick={() => push("/create/dreams")}>
              <IonRow class="dreams-button ion-justify-content-around">
                <IonCol size="auto">
                  <div className="create-buttons">Dreams</div>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={moon} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </div>
          </IonGrid>
          <IonGrid>
            <div onClick={() => push("/create/memories")}>
              <IonRow class="memories-button ion-justify-content-around">
                <IonCol size="auto">
                  <div className="create-buttons">Memories</div>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={recordingSharp} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </div>
          </IonGrid>
          <IonGrid>
            <div onClick={() => push("/create/thoughts")}>
              <IonRow class="thoughts-button ion-justify-content-around">
                <IonCol size="auto">
                  <div className="create-buttons">Thoughts</div>
                </IonCol>
                <IonCol size="auto">
                  <IonLabel className="create-buttons">
                    <IonIcon icon={cloudySharp} />
                  </IonLabel>
                </IonCol>
              </IonRow>
            </div>
          </IonGrid>
        </IonList>
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
}

export default CreatePage;

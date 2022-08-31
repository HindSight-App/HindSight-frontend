import React from "react";
import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { homeSharp, searchSharp, addCircleSharp } from "ionicons/icons";
import "./Tabs.css";

export const Tabs: React.FC = () => (
  <IonGrid>
    <IonRow class="tabs">
      <IonCol>
        <IonItem class="tab-button" routerLink="/dashboard">
          <div className="input-wrapper">
            <IonIcon class="local-icon" icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </div>
        </IonItem>
      </IonCol>
      <IonCol>
        <IonItem class="tab-button" routerLink="/search">
          <div className="input-wrapper">
            <IonIcon class="local-icon" icon={searchSharp} />
            <IonLabel>Search</IonLabel>
          </div>
        </IonItem>
      </IonCol>
      <IonCol>
        <IonItem class="tab-button" routerLink="/create">
          <div className="input-wrapper">
            <IonIcon class="local-icon" icon={addCircleSharp} />
            <IonLabel>Create</IonLabel>
          </div>
        </IonItem>
      </IonCol>
    </IonRow>
  </IonGrid>
);

export default Tabs;

import React from 'react';
import { IonItem, IonGrid, IonRow, IonCol, IonLabel } from '@ionic/react';
import "./Tabs.css"



export const Tabs: React.FC = () => (
    <IonGrid>
      <IonRow class='tabs'>
          <IonCol>
            <IonItem class='tab-button' routerLink="/dashboard">
              <IonLabel >Home</IonLabel>
            </IonItem>
          </IonCol>
          <IonCol >
            <IonItem class='tab-button' routerLink="/search">
            <IonLabel>Search</IonLabel>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem class='tab-button' routerLink="/create">
            <IonLabel>Create</IonLabel>
            </IonItem>
          </IonCol>
      </IonRow>
    </IonGrid>
);

export default Tabs;
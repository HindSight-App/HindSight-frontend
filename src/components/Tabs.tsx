import React from "react";
import { IonGrid, IonRow, IonCol, IonLabel, IonIcon } from "@ionic/react";
import { homeSharp, addCircleSharp } from "ionicons/icons";
import "./Tabs.css";
import { useHistory } from "react-router";

function Tabs() {
  const { push } = useHistory();

  return (
    <IonGrid>
      <IonRow class="tabs">
        <IonCol>
          <div className="tab" onClick={() => push("/dashboard")}>
            <div className="input-wrapper">
              <IonIcon class="local-icon" icon={homeSharp} />
              <IonLabel>Home</IonLabel>
            </div>
          </div>
        </IonCol>
        <IonCol>
          <div className="tab" onClick={() => push("/create")}>
            <div className="input-wrapper">
              <IonIcon class="local-icon" icon={addCircleSharp} />
              <IonLabel>Create</IonLabel>
            </div>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Tabs;

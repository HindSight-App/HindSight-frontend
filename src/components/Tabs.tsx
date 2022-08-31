import React from "react";
import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  homeSharp,
  searchSharp,
  addCircleSharp,
  addCircle,
} from "ionicons/icons";
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

// export const Tabs: React.FC = () => (
//   <IonGrid>
//     <IonRow class="tabs">
//       <IonCol>
//         <div onClick={"/dashboard"}>
//           <div className="input-wrapper">
//             <IonIcon class="local-icon" icon={homeSharp} />
//             <IonLabel>Home</IonLabel>
//           </div>
//         </div>
//       </IonCol>
//       <IonCol>
//         <IonItem class="tab-button" routerLink="/create">
//           <div className="input-wrapper">
//             <IonIcon class="local-icon" icon={addCircleSharp} />
//             <IonLabel>Create</IonLabel>
//           </div>
//         </IonItem>
//       </IonCol>
//     </IonRow>
//   </IonGrid>
// );

export default Tabs;

import {
  IonContent,
  IonGrid,
  IonCol,
  IonPage,
  IonRow,
  IonInput,
  IonItem,
  IonButton,
  IonText,
  IonImg,
} from "@ionic/react";

import "./Signup.css";



const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="grid">
          <IonRow>
            <IonCol>
              <IonImg src="https://cdn.discordapp.com/attachments/1007867692197355550/1012415331794440273/Hindsight.png"></IonImg>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>
              <IonItem>
                <input type={'file'}></input>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>
              <IonItem>
                <IonInput
                  type="email"
                  autocomplete="email"
                  inputmode="email"
                  placeholder="Enter Your Email"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>
              <IonItem>
                <IonInput
                  type="text"
                  inputmode="text"
                  placeholder="Create A Username"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>
              <IonItem>
                <IonInput
                  type="password"
                  autocomplete="new-password"
                  inputmode="text"
                  placeholder="Create A Password"
                  pattern="password"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>
              <IonButton expand="full" type="submit">Signup</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
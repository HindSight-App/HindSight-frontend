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

import "./Login.css";

const Login: React.FC = () => {
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
                <IonInput
                  type="email"
                  autocomplete="email"
                  inputmode="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  pattern="password"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCol>
              <IonButton expand="full" type="submit">Login</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                Don't have an account?{" "}
                <a href="/signup" className="link">
                  Sign up here
                </a>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;

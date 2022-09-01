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
import { useState } from "react";
import { signIn } from "../../services/AuthUtils";
import { useHistory } from "react-router";

import "./Login.css";

function Login() {
  let { push } = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await signIn(user.email, user.password);

    push("/dashboard");
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit}>
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
                    onIonChange={(e) =>
                      setUser({
                        email: String(e.target.value),
                        password: user.password,
                      })
                    }
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
                    onIonChange={(e) =>
                      setUser({
                        email: user.email,
                        password: String(e.target.value),
                      })
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonButton expand="full" type="submit">
                  Login
                </IonButton>
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
        </form>
      </IonContent>
    </IonPage>
  );
}

export default Login;

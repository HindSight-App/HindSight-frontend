import {
  IonContent,
  IonGrid,
  IonCol,
  IonPage,
  IonRow,
  IonInput,
  IonItem,
  IonButton,
  IonImg,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  SignupSupabase,
  setupProfile,
  uploadFile,
} from "../../services/AuthUtils.js";

import "./Signup.css";

type User = {
  email: string;
  password: string;
};
type Profile = {
  username: string;
};
const Signup: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    username: "",
  });
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [file, setFile]: any = useState([]);

  let { push } = useHistory();

  async function handleSignup(e: any) {
    e.preventDefault();

    await SignupSupabase(user.email, user.password);
    await uploadFile(file[0].name, file[0]);
    await setupProfile(
      profile.username,
      `${process.env.REACT_APP_AVATAR_PATH}${file[0].name}`
    );

    push("/create");
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <form onSubmit={handleSignup}>
          <IonGrid className="grid">
            <IonRow>
              <IonCol>
                <IonImg src="https://cdn.discordapp.com/attachments/1007867692197355550/1012415331794440273/Hindsight.png"></IonImg>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem>
                  <input
                    type={"file"}
                    onChange={(e) => {
                      if (e.target.files) {
                        file.push(e.target.files[0]);
                      }
                    }}
                  ></input>
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
                    type="text"
                    inputmode="text"
                    placeholder="Create A Username"
                    onIonChange={(e) =>
                      setProfile({
                        username: String(e.target.value),
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
                    placeholder="Create A Password"
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
                  Signup
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

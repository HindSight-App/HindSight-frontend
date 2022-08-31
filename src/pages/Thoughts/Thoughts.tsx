import {
  IonContent,
  IonPage,
  IonItem,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonButtons,
  IonButton,
  IonBackButton,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonTextarea,
} from "@ionic/react";
import { cloudySharp } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { createHindsight } from "../../services/AuthUtils";
import "./Thoughts.css";

type Thought = {
  title: string;
  description: string;
  datetime: string;
  visibility: string;
  type: string;
};

function ThoughtsPage() {
  const [thought, setThought] = useState<Thought>({
    title: "",
    description: "",
    datetime: "",
    visibility: "true",
    type: "Thought",
  });

  let { push } = useHistory();

  async function handleCreate(e: any) {
    e.preventDefault();

    await createHindsight(thought);

    push("/dashboard");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="new-background-color">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/create" />
          </IonButtons>
          <IonTitle>Thought Create Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="thoughts-page">
        <form onSubmit={handleCreate}>
          <IonGrid className="grid-Dreams-page">
            <IonRow>
              <IonCol>
                <IonIcon class="ideas-page-icon" icon={cloudySharp} />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class="ideas-page-ion-item">
                  <IonInput
                    inputmode="text"
                    placeholder="Title"
                    onIonChange={(e) =>
                      setThought({
                        title: String(e.target.value),
                        description: thought.description,
                        datetime: thought.datetime,
                        visibility: thought.visibility,
                        type: thought.type,
                      })
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class="ideas-page-ion-item">
                  <IonTextarea
                    wrap="soft"
                    name="description"
                    rows={10}
                    inputmode="text"
                    placeholder="Description"
                    onIonChange={(e) =>
                      setThought({
                        title: thought.title,
                        description: String(e.target.value),
                        datetime: thought.datetime,
                        visibility: thought.visibility,
                        type: thought.type,
                      })
                    }
                  ></IonTextarea>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class="ideas-page-ion-item">
                  <IonDatetimeButton datetime="datetime" />
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      id="datetime"
                      onIonChange={(e) =>
                        setThought({
                          title: thought.title,
                          description: thought.description,
                          datetime: String(e.target.value),
                          visibility: thought.visibility,
                          type: thought.type,
                        })
                      }
                    ></IonDatetime>
                  </IonModal>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class="ideas-page-ion-item">
                  <IonLabel>Public/Private:</IonLabel>
                  <IonSelect
                    onIonChange={(e) =>
                      setThought({
                        title: thought.title,
                        description: thought.description,
                        datetime: thought.datetime,
                        visibility: String(e.target.value),
                        type: thought.type,
                      })
                    }
                  >
                    <IonSelectOption value="true">Public</IonSelectOption>
                    <IonSelectOption value="false">Private</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonButton expand="full" type="submit">
                  Submit Thought
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default ThoughtsPage;

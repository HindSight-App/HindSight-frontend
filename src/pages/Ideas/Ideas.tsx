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
import { bulb } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { createHindsight } from "../../services/AuthUtils";
  
  import "./Ideas.css";
  type Idea = {
    title: string;
    description: string;
    datetime: string;
    visibility: string;
    type: string;
  };

  function IdeasPage() {
      const [idea, setIdea] = useState<Idea>({
        title: '',
        description: '',
        datetime: '',
        visibility: 'true',
        type: 'Idea',
      });
    
      let { push } = useHistory();

      async function handleCreate(e: any) {
        e.preventDefault();
    
        await createHindsight(idea);
    
        push("/dashboard");
      }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="ideas-page">
            <IonButtons slot="start">
                <IonBackButton defaultHref="/create"/>
            </IonButtons>
            <IonTitle>Idea Create Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <form onSubmit={handleCreate}>
            <IonGrid className="grid-ideas-page">
            <IonRow>
              <IonCol>
              <IonIcon class='ideas-page-icon'icon={bulb} />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class='ideas-page-ion-item'>
                <IonInput
                    inputmode="text"
                    placeholder="Title"
                    onIonChange={(e) =>
                        setIdea({
                            title: String(e.target.value),
                            description: idea.description,
                            datetime: idea.datetime,
                            visibility: idea.visibility,
                            type: idea.type
                      })
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class='ideas-page-ion-item'>
                  <IonTextarea
                  wrap='soft'
                    name='description'
                    rows={10}
                    inputmode="text"
                    placeholder="Description"
                    onIonChange={(e) =>
                        setIdea({
                            title: idea.title,
                            description: String(e.target.value),
                            datetime: idea.datetime,
                            visibility: idea.visibility,
                            type: idea.type
                      })
                    }
                  ></IonTextarea>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class='ideas-page-ion-item'>
                    <IonDatetimeButton datetime="datetime" />
                    <IonModal keepContentsMounted={true}>
                        <IonDatetime id="datetime" onIonChange={(e) =>
                        setIdea({
                            title: idea.title,
                            description: idea.description,
                            datetime: String(e.target.value),
                            visibility: idea.visibility,
                            type: idea.type
                      })
                    }></IonDatetime>
                    </IonModal>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class='ideas-page-ion-item'>
                    <IonLabel>Public/Private:</IonLabel>
                 <IonSelect onIonChange={(e) =>
                        setIdea({
                            title: idea.title,
                            description: idea.description,
                            datetime: idea.datetime,
                            visibility: String(e.target.value),
                            type: idea.type
                      })
                    }>
                    <IonSelectOption value="true">Public</IonSelectOption>
                    <IonSelectOption value="false">Private</IonSelectOption>
                 </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonButton expand="full" type="submit">
                  Submit Idea
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
            </form>
        </IonContent>
      </IonPage>
    );
  }
  
  export default IdeasPage;
  
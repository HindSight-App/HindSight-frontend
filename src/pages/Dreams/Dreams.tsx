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
import { moon } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { createHindsight } from "../../services/AuthUtils";
  
  import "./Dreams.css";
  type Dream = {
    title: string;
    description: string;
    datetime: string;
    visibility: string;
    type: string;
  };

  function DreamsPage() {
      const [dream, setDream] = useState<Dream>({
        title: '',
        description: '',
        datetime: '',
        visibility: 'true',
        type: 'Dream',
      });
    
      let { push } = useHistory();

      async function handleCreate(e: any) {
        e.preventDefault();
    
        await createHindsight(dream);
    
        push("/dashboard");
      }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="ideas-page">
            <IonButtons slot="start">
                <IonBackButton defaultHref="/create"/>
            </IonButtons>
            <IonTitle>Dream Create Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <form onSubmit={handleCreate}>
            <IonGrid className="grid-Dreams-page">
            <IonRow>
              <IonCol>
              <IonIcon class='ideas-page-icon'icon={moon} />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class='ideas-page-ion-item'>
                <IonInput
                    inputmode="text"
                    placeholder="Title"
                    onIonChange={(e) =>
                        setDream({
                            title: String(e.target.value),
                            description: dream.description,
                            datetime: dream.datetime,
                            visibility: dream.visibility,
                            type: dream.type
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
                        setDream({
                            title: dream.title,
                            description: String(e.target.value),
                            datetime: dream.datetime,
                            visibility: dream.visibility,
                            type: dream.type
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
                        setDream({
                            title: dream.title,
                            description: dream.description,
                            datetime: String(e.target.value),
                            visibility: dream.visibility,
                            type: dream.type
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
                        setDream({
                            title: dream.title,
                            description: dream.description,
                            datetime: dream.datetime,
                            visibility: String(e.target.value),
                            type: dream.type
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
                  Submit Dream
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
            </form>
        </IonContent>
      </IonPage>
    );
  }
  
  export default DreamsPage;
  
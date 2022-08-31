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
import { recordingSharp } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { createHindsight } from "../../services/AuthUtils";
  
  import "./Memories.css";
  type Memory = {
    title: string;
    description: string;
    datetime: string;
    visibility: string;
    type: string;
  };

  function MemoriesPage() {
      const [memory, setMemory] = useState<Memory>({
        title: '',
        description: '',
        datetime: '',
        visibility: 'true',
        type: 'Memory',
      });
    
      let { push } = useHistory();

      async function handleCreate(e: any) {
        e.preventDefault();
    
        await createHindsight(memory);
    
        push("/dashboard");
      }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="new-background-color">
            <IonButtons slot="start">
                <IonBackButton defaultHref="/create"/>
            </IonButtons>
            <IonTitle>Memory Create Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="memories-page">
            <form onSubmit={handleCreate}>
            <IonGrid className="grid-Dreams-page">
            <IonRow>
              <IonCol>
              <IonIcon class='ideas-page-icon'icon={recordingSharp} />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCol>
                <IonItem class='ideas-page-ion-item'>
                <IonInput
                    inputmode="text"
                    placeholder="Title"
                    onIonChange={(e) =>
                        setMemory({
                            title: String(e.target.value),
                            description: memory.description,
                            datetime: memory.datetime,
                            visibility: memory.visibility,
                            type: memory.type
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
                        setMemory({
                            title: memory.title,
                            description: String(e.target.value),
                            datetime: memory.datetime,
                            visibility: memory.visibility,
                            type: memory.type
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
                        setMemory({
                            title: memory.title,
                            description: memory.description,
                            datetime: String(e.target.value),
                            visibility: memory.visibility,
                            type: memory.type
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
                        setMemory({
                            title: memory.title,
                            description: memory.description,
                            datetime: memory.datetime,
                            visibility: String(e.target.value),
                            type: memory.type
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
                  Submit Memory
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
            </form>
        </IonContent>
      </IonPage>
    );
  }
  
  export default MemoriesPage;
  
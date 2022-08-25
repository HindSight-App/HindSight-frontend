import { IonContent, IonGrid, IonHeader, IonCol, IonPage, IonRow, IonTitle, IonToolbar, IonInput, IonItem } from '@ionic/react';

import './Login.css';

const Login: React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle className='ion-align-items-center ion-text-center'>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonGrid className='grid'>
            <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
                <IonCol>
                <IonItem>
            <IonInput autocomplete='email' inputmode='email' placeholder="Email" ></IonInput>
          </IonItem>

                </IonCol>
            </IonRow>
            <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
                <IonCol>Hi Kevin</IonCol>
            </IonRow>
            <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
                <IonCol>Login</IonCol>
            </IonRow>
            <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
                <IonCol>Login</IonCol>
            </IonRow>
            <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
                <IonCol>Login</IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
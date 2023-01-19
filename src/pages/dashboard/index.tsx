import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton } from '@ionic/react';
import './index.css';
import './index.css'

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
        <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonTitle>Welcome!</IonTitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;

/*
        <StartTest test={testStart.current}></StartTest>
*/
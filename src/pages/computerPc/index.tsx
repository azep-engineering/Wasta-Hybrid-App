import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './index.css';
import './index.css';
import Table from '../../components/table/index';

interface DataProps {
  title: string,
  createdDate: Date,
  updatedDate: Date
}

const ComputerPC: React.FC = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleNavigateNewForm = () => {
    history.push('/computerPc/add')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Computer PC</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow class='ion-justify-content-end'>
            <IonCol size='auto'>
              <IonButton onClick={handleNavigateNewForm}>Add</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Table data={data} tableType={'coputerPc'} />
      </IonContent>
    </IonPage>
  );
};

export default ComputerPC;

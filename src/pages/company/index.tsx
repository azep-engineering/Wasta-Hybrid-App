import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonLabel, IonButtons, IonMenuButton,
  IonGrid, IonRow, IonCol
} from '@ionic/react';
import './index.css';
import Table from '../../components/table/index';
import './index.css'

const Company: React.FC = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleNavigateNewForm = () => {
    history.push('/company/add')
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Company</IonTitle>
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
        <Table data={data} tableType={'company'} />
      </IonContent>
    </IonPage>
  );
};

export default Company;

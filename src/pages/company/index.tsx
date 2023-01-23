import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonLabel, IonButtons, IonMenuButton,
  IonGrid, IonRow, IonCol, useIonViewDidEnter
} from '@ionic/react';
import './index.css';
import Table from '../../components/table/index';
import { CompanyService } from '../../services/CompanyService';
import { Company} from "../../Repository/Entities/company"; 
import { useLocation } from 'react-router';
import './index.css';

const CompanyPage: React.FC =  () => {
  const [data, setData] = useState<Company[]>([]);
  const history = useHistory();
  const location = useLocation();

const service =  new CompanyService();
  useEffect(() => {
    if(location.pathname === '/company'){
      service.getAll().then((result)=>{
      setData(result);
    })
    }
  },[location.key]);

  const handleNavigateNewForm = () => {
    history.push('/company/add');
  };

  const data1 = [{
    id :1,
    businessRn: "5764378",
    companyNo: "92169934",
    englishName: "Dev Bee",
    phoneNo: "87473656623"
  },{
    id :2,
    businessRn: "083519",
    companyNo: "5689457",
    englishName: "Dev Bee",
    phoneNo: "7273657823"
  },{
    id :3,
    businessRn: "24896",
    companyNo: "143459",
    englishName: "Dev Bee",
    phoneNo: "904562314"
  }];

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
        <Table data={data1} tableType={'company'} />
      </IonContent>
    </IonPage>
  );
};

export default CompanyPage;

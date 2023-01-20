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

import { match } from 'react-router';

const CompanyPage: React.FC =  () => {
  const [data, setData] = useState<Company[]>([]);
  const history = useHistory();
  const location = useLocation();

useIonViewDidEnter(()=>{
  async function getAndSetData(){
    
    let response = await service.getAll();
    
    setData(response);
  }
  if(location.pathname === '/company'){
    getAndSetData();
  }
  
},[location.key])

  // useEffect(() => {

  //   async function getAndSetData(){
  //     console.log("23123123");
  //     let response = await service.getAll();
      
  //     setData(response);
  //   }
  //   getAndSetData();
  // },[location.key])

  const handleNavigateNewForm = () => {
    history.push('/company/add')
  };

  const service =  new CompanyService();


  

  service.getAll();
  const data1 = [{
    id :1,
    title: "hello",
    createdDate: "1/1/2020",
    updatedDate: "1/1/2020"
  },{
    id :2,
    title: "hello",
    createdDate: "1/1/2020",
    updatedDate: "1/1/2020"
  },{
    id :3,
    title: "hello",
    createdDate: "1/1/2020",
    updatedDate: "1/1/2020"
  }];

  console.log("-------",data);


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

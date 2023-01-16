import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonLabel } from '@ionic/react';
import './Tab2.css';
import { Info } from '../Repository/Entities/Info';
import { CreateInfo, GetInfo } from '../Repository/TestRepo';


const Tab2: React.FC = () => {
  const [info, setInfo] = useState("");

  const handleChange = (event : any) => {

    setInfo( event.target.value );
  };


  const handleSubmit = async (event : any) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    let obj = new Info();
    obj.note = info;
    await CreateInfo(obj);
    await GetInfo();
    setInfo('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Info</IonLabel>
            <IonInput onIonInput={handleChange} value={info}  type="text" />
          </IonItem>
          <IonButton onClick={handleSubmit} type="button" expand="block">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

/*
        <StartTest test={testStart.current}></StartTest>
*/
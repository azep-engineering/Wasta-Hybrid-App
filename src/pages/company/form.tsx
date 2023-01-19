import React, { FC } from 'react';
import { useState } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonLabel, IonButtons, IonMenuButton,
  IonGrid, IonRow, IonCol
} from '@ionic/react';
import { Info } from '../../Repository/Entities/Info';
import { CreateInfo, GetInfo } from '../../Repository/TestRepo';

const CompanyForm: FC = () => {
  const [info, setInfo] = useState('');

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
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Create Company Form</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <form className='ion-padding'>
          <IonItem>
            <IonLabel position='floating'>Info</IonLabel>
            <IonInput onIonInput={handleChange} value={info}  type='text' />
          </IonItem>
          <IonButton onClick={handleSubmit} type='button' expand='block'>
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
	)
};

export default CompanyForm;

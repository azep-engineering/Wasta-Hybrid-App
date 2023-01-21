import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './index.css'

interface TableProps {
  data: {
    id: number,
    businessRn: string,
    companyNo: string,
    englishName: string,
    phoneNo: string
  }[],
  tableType: string
}

const columnNames = ['Business RN', 'Company No', 'English Name', 'Phone No', 'Action']

const Table: FC<TableProps> = ({ data, tableType }) => {

  const history = useHistory();

  const handleNavigateEditForm = (formId: number) => {
    history.push(`/${tableType}/${formId}`);
  };

  return (
    <IonContent class='ion-padding'>
      <IonGrid fixed={true} className='table-grid'>
        <IonRow>
          {
            columnNames.map((title, index) => 
              <IonCol class='ion-padding-start' key={index}>{ title }</IonCol>
            )
          }
        </IonRow>
        {data.map(({id, businessRn, companyNo, englishName, phoneNo}) => 
          <IonRow key={id} class='ion-align-items-center'>
            <IonCol class='ion-padding-start'>{ businessRn }</IonCol>
            <IonCol>{ companyNo }</IonCol>
            <IonCol>{ englishName }</IonCol>
            <IonCol>{ phoneNo }</IonCol>
            <IonCol>
              <IonButton size='small' onClick={() => handleNavigateEditForm(id)}>Edit</IonButton>
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    </IonContent>
  )
};

export default Table;

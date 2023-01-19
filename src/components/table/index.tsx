import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './index.css'

interface TableProps {
  data: {
    id: number,
    title: string,
    createdDate: string,
    updatedDate: string
  }[],
  tableType: string
}

const columnNames = ['Title', 'Created', 'Updated', 'Action']

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
        {data.map(({id, title, createdDate, updatedDate}) => 
          <IonRow key={id} class='ion-align-items-center'>
            <IonCol class='ion-padding-start'>{ title }</IonCol>
            <IonCol>{ createdDate }</IonCol>
            <IonCol>{ updatedDate }</IonCol>
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

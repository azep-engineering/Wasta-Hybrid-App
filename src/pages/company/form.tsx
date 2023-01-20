import React, { FC } from 'react';
import { useState } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonLabel, IonButtons, IonMenuButton,
  IonGrid, IonRow, IonCol, IonTextarea
} from '@ionic/react';
import { Info } from '../../Repository/Entities/Info';
import { CreateInfo, GetInfo } from '../../Repository/TestRepo';
import { Company } from '../../Repository/Entities/company';
import { CompanyService } from '../../services/CompanyService';


const CompanyForm: FC = () => {
  const [info, setInfo] = useState('');

  const [businessRn, setBusinessRn] = useState('');
  const [companyNo, setCompanyNo] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [arabicName, setArabicName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [dateHijri, setDateHijri] = useState('');
  const [dateGregorian, setDateGregorian] = useState('');
  const [dateEstablishment, setDateEstablishment] = useState('');
  const [buildingNo, setBuildingNo] = useState('');


  const [englishStreetName, setEnglishStreetName] = useState('');
  const [arabicStreetName, setArabicStreetName] = useState('');
  const [englishDistrict, setEnglishDistrict] = useState('');
  const [arabicDistrict, setArabicDistrict] = useState('');
  const [englishCity, setEnglishCity] = useState('');
  const [arabicCity, setArabicCity] = useState('');
  const [englishCountry, setEnglishCountry] = useState('');
  const [arabicCountry, setArabicCountry] = useState('');

  const [additionalNo, setAdditionalNo] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [secondBusinessId, setSecondBusinessId] = useState('');
  const [secondBusinessIdType, setSecondBusinessIdType] = useState('');
  const [compayIconLocation80, setCompayIconLocation80] = useState('');
  const [compayIconLocationA4, setCompayIconLocationA4] = useState('');

  const handleSubmit = async (event : any) => {
      let service = new CompanyService();
      let data: Company = {
        id : 0,
        businessRn : businessRn,
        companyNo : companyNo,
        englishName : englishName,
        arabicName : arabicName,
        phoneNo : phoneNo,
        address : address,
        dateHijri : dateHijri,
        dateGregorian : dateGregorian,
        dateEstablishment : dateEstablishment,
        buildingNo : buildingNo,
        englishStreetName : englishStreetName,
        arabicStreetName : arabicStreetName,
        englishDistrict : englishDistrict,
        arabicDistrict : arabicDistrict,
        englishCity : englishCity,
        arabicCity : arabicCity,
        englishCountry : englishCountry,
        arabicCountry : arabicCountry,
        additionalNo : additionalNo,
        postalCode : postalCode,
        secondBusinessId : secondBusinessId,
        secondBusinessIdType : secondBusinessIdType,
        compayIconLocation80 : compayIconLocation80,
        compayIconLocationA4 : compayIconLocationA4,
      }
      await service.Create(data);
      console.log(data);
  };

  return (
		<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Create Computer PC Form</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Business Registration Number</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setBusinessRn(e.target.value)} value={businessRn} type='text' placeholder='Enter business registration number' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Company No</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setCompanyNo(e.target.value)} value={companyNo} type='number' placeholder='Enter company no' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>English Name</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setEnglishName(e.target.value)} value={englishName} type='text' placeholder='Enter english name' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Arabic Name</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setArabicName(e.target.value)} value={arabicName} type='text' placeholder='Enter arabic name' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Phone 1</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setPhoneNo(e.target.value)} value={phoneNo}  type='number' placeholder='Enter Phone number' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Address</IonLabel>
                <IonTextarea className='custom' onIonInput={(e : any) => setAddress(e.target.value)} value={address} autoGrow={true} placeholder='Enter address' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Date Hijri</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setDateHijri(e.target.value)} value={dateHijri} type='date' placeholder='Select date hijri' />
              </IonItem>
            </IonCol>
            <IonCol>      
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Date Gregorian</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setDateGregorian(e.target.value)} value={dateGregorian} type='date' placeholder='Select date gregorian' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Date of establishment</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setDateEstablishment(e.target.value)} value={dateEstablishment} type='date' placeholder='Select date of establishmen' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Building No.</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setBuildingNo(e.target.value)} value={buildingNo} type='number' placeholder='Enter building number' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Street Name English</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setEnglishStreetName(e.target.value)} value={englishStreetName} type='text' placeholder='Enter street name english' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Street Name Arabic</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setArabicStreetName(e.target.value)} value={arabicStreetName} type='text' placeholder='Enter street name arabic' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>District English</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setEnglishDistrict(e.target.value)} value={englishDistrict} type='text' placeholder='Enter district english' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>District Arabic</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setArabicDistrict(e.target.value)} value={arabicDistrict} type='text' placeholder='Enter district arabic' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>City English</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setEnglishCity(e.target.value)} value={englishCity} type='text' placeholder='Enter city english' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>City Arabic</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setArabicCity(e.target.value)} value={arabicCity} type='text' placeholder='Enter city arabic' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Country English</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setEnglishCountry(e.target.value)} value={englishCountry} type='text' placeholder='Enter country english' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Country Arabic</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setArabicCountry(e.target.value)} value={arabicCountry} type='text' placeholder='Enter country arabic' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Additional No</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setAdditionalNo(e.target.value)} value={additionalNo} type='number' placeholder='Enter additional number' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Postal Code</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setPostalCode(e.target.value)} value={postalCode} type='number' placeholder='Enter postal code' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Second Business ID</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setSecondBusinessId(e.target.value)} value={secondBusinessId} type='text' placeholder='Enter second business id' />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Second Business ID Type</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setSecondBusinessIdType(e.target.value)} value={secondBusinessIdType} type='text' placeholder='Enter second business id type' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Company Icon Location 80mm</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setCompayIconLocation80(e.target.value)} value={compayIconLocation80} type='email' placeholder='Enter email id' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className='form-item'>
                <IonLabel position='stacked' className='label'>Company Icon Location A4</IonLabel>
                <IonInput className='custom' onIonInput={(e : any) => setCompayIconLocationA4(e.target.value)} value={compayIconLocationA4} type='email' placeholder='Enter email id' />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonButton onClick={handleSubmit} type='button'>
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
	)
};

export default CompanyForm;

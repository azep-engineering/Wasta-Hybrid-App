import React from 'react';
import { 
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonMenuToggle,
  IonLabel
} from '@ionic/react';
import { apps, home, laptopOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import './index.css';

interface AppPage {
  title: string,
  url: string,
  iosIcon: string,
  mdIcon: string
}

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    iosIcon: apps,
    mdIcon: apps
  },
  {
    title: 'Company',
    url: '/company',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Computer PC',
    url: '/computerPc',
    iosIcon: laptopOutline,
    mdIcon: laptopOutline
  }
]

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Wasta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList id='navigations-list'>
            {appPages.map(({title, url, iosIcon, mdIcon}, index) => (
              <IonMenuToggle  key={index} autoHide={false}>
                <IonItem class={location.pathname.includes(url) ? 'selected' : ''} routerLink={url} routerDirection='none' lines='none' detail={false}>
                  <IonIcon slot='start' ios={iosIcon} md={mdIcon} />
                  <IonLabel>{ title }</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;

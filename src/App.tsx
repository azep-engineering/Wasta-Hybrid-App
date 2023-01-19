import React, { useState }  from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact
} from '@ionic/react';

// Pages
import Login from './pages/login/index';
import Dashboard from './pages/dashboard/index';
import Menu from './components/menu/index';
import Company from './pages/company/index';
import ComputerPC from './pages/computerPc/index';
import CompanyForm from './pages/company/form';
import ComputerPcForm from './pages/computerPc/form';

import { SQLiteHook, useSQLite } from 'react-sqlite-hook';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

interface JsonListenerInterface {
  jsonListeners: boolean,
  setJsonListeners: React.Dispatch<React.SetStateAction<boolean>>,
}
interface existingConnInterface {
  existConn: boolean,
  setExistConn: React.Dispatch<React.SetStateAction<boolean>>,
}

// Singleton SQLite Hook
export let sqlite: SQLiteHook;
// Existing Connections Store
export let existingConn: existingConnInterface;
// Is Json Listeners used
export let isJsonListeners: JsonListenerInterface;

setupIonicReact();

const App: React.FC = () => {
  const [existConn, setExistConn] = useState(false);
  existingConn = {existConn: existConn, setExistConn: setExistConn};

  // !!!!! if you do not want to use the progress events !!!!!
  // since react-sqlite-hook 2.1.0
  // sqlite = useSQLite()
  // before
  // sqlite = useSQLite({})
  // !!!!!                                               !!!!!

  sqlite = useSQLite();
  console.log(`$$$ in App sqlite.isAvailable  ${sqlite.isAvailable} $$$`);


  return (
    <IonApp>
      <IonReactRouter>
        <Route exact={true} path='/'>
          <Login />
        </Route>
        <IonSplitPane when='md' contentId='main' style={{disabled: true}}>
          <Menu />
          <IonRouterOutlet id='main'>
            <Route exact={true} path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact={true} path='/company'>
              <Company />
            </Route>
            <Route exact={true} path='/computerPc'>
              <ComputerPC />
            </Route>
            <Route exact={true} path='/company/:formId'>
              <CompanyForm />
            </Route>
            <Route exact={true} path='/computerPc/:formId'>
              <ComputerPcForm />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

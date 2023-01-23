import { 
	IonPage, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter,
	IonGrid, IonRow, IonCol, IonItem, IonInput, IonLabel, IonButton
} from '@ionic/react';
import { useHistory } from 'react-router';
import { isLoggedInScope } from '../../App';

const Login: React.FC = () => {
	const history = useHistory();
	const HandleLogin=()=>{
		isLoggedInScope.SetisLoggedIn(true);
		history.push('/dashboard');
	};
  return (
    <IonPage>
      <IonHeader>
				<IonToolbar>
					<IonTitle>Wasta Hybrid App</IonTitle>
				</IonToolbar>
      </IonHeader>

			<IonGrid>
				<IonRow>
					<IonCol size='auto'>
						<IonCard style={{width: '500px'}}>
							<IonCardHeader>
								<IonCardTitle>Login</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<IonItem>
									<IonLabel position='floating'>Email ID</IonLabel>
									<IonInput type='email' placeholder='Enter email id' />
								</IonItem>
								<IonItem>
									<IonLabel position='floating'>Password</IonLabel>
									<IonInput type='password' placeholder='Enter password' />
								</IonItem>
								<IonButton  onClick={HandleLogin} shape='round' color='primary' expand='full' class='ion-margin'>Login</IonButton>
							</IonCardContent>
						</IonCard>
					</IonCol>
				</IonRow>
			</IonGrid>

			<IonFooter>
				<IonToolbar>
					<IonTitle>@2023</IonTitle>
				</IonToolbar>
			</IonFooter>
    </IonPage>
  )
};

export default Login;

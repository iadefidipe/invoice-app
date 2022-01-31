import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase/clientApp'

//configure firebaseUI
const uiConfig = {
	signInSuccesful: '/',
	signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
}

function SignInScreen() {
	return (
		<div
			style={{
				maxWidth: '320px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<h1> Invoice App</h1>
			<p> Please sign-in: </p>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		</div>
	)
}

export default SignInScreen

import { getApps, initializeApp } from 'firebase/app' //initialize app
import 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

//import credentials from env file
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

let App

if (!getApps.length) {
	App = initializeApp(firebaseConfig)
}

export const db = getFirestore(App)
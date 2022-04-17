import { getApps, initializeApp } from "firebase/app" //initialize app
import "firebase/auth"
import { getFirestore } from "firebase/firestore"

//import credentials from env file
const firebaseConfig = {
	apiKey: "AIzaSyCioKvmucLIKdFwHe3Eq6zZW9iEbRBU5WE",
	authDomain: "fir-invoice-bd549.firebaseapp.com",
	projectId: "fir-invoice-bd549",
	storageBucket: "fir-invoice-bd549.appspot.com",
	messagingSenderId: "410418200082",
	appId: "1:410418200082:web:8e7f5a89a25d94ef0922cb",
	measurementId: "G-6X6KVWRNN2"
}

let App

if (!getApps.length) {
  App = initializeApp(firebaseConfig)
}

export const db = getFirestore(App)

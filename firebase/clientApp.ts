import { getApps, initializeApp } from 'firebase/app' //initialize app
import 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

//import credentials from env file
const firebaseConfig = {
  apiKey: "AIzaSyAe2UCatguUZlnuKDukLoIe50px6mv_UmI",
  authDomain: "invoice-db-28716.firebaseapp.com",
  projectId: "invoice-db-28716",
  storageBucket: "invoice-db-28716.appspot.com",
  messagingSenderId: "393945742923",
  appId: "1:393945742923:web:c5a9b38ab7d5ff55df17ce",
  measurementId: "G-W2837XCN1K"
}

let App

if (!getApps.length) {
	App = initializeApp(firebaseConfig)
}

export const db = getFirestore(App)

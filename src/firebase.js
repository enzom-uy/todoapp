import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDFoPsfUarIP-p3uMeEucKNBrqdu_btQC8',
    authDomain: 'todoapp-54921.firebaseapp.com',
    projectId: 'todoapp-54921',
    storageBucket: 'todoapp-54921.appspot.com',
    messagingSenderId: '874810570499',
    appId: '1:874810570499:web:43c96f9d03b6c1853b5b36'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

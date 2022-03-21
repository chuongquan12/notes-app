// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import 'firebase/auth'
import firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCIye6TPHq9nw3gGfDwrR4UWPOOR68XD1Q',
    authDomain: 'fir-test-54076.firebaseapp.com',
    projectId: 'fir-test-54076',
    storageBucket: 'fir-test-54076.appspot.com',
    messagingSenderId: '450038414553',
    appId: '1:450038414553:web:87fc0a690d44b4a09252c8',
    measurementId: 'G-YC0BX07F1V',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const authentication = getAuth(app)

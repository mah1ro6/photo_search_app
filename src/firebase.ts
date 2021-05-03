import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

firebase.initializeApp({
  apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE
})

export const auth = firebase.auth()
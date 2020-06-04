import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCQJRSb0mY91QLpOaGVRYm5QHQcW1qcHTw",
  authDomain: "crwn-db-3b25d.firebaseapp.com",
  databaseURL: "https://crwn-db-3b25d.firebaseio.com",
  projectId: "crwn-db-3b25d",
  storageBucket: "crwn-db-3b25d.appspot.com",
  messagingSenderId: "264150343286",
  appId: "1:264150343286:web:57fe427c71a08108064957",
  measurementId: "G-2543BS9535"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase





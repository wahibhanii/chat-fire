import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDroCY6vwmjokw-rrm9Xc9C2zt3b70NXl0',
  authDomain: 'chat-fire-27eb4.firebaseapp.com',
  databaseURL: 'https://chat-fire-27eb4.firebaseio.com',
  projectId: 'chat-fire-27eb4',
  storageBucket: '',
  messagingSenderId: '796016521090'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

export default db

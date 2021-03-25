import firebase from "firebase"

const firebaseConfig = {
  "YOUR_CREDENTIALS_HERE"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.firestore()
  firebase.auth()
  firebase.storage()
  export default firebase

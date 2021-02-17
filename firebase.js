import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyByHYkjS13YM9FHN-zJ9vf05jd00-_WZ5E",
  authDomain: "booksanta-20159.firebaseapp.com",
  projectId: "booksanta-20159",
  storageBucket: "booksanta-20159.appspot.com",
  messagingSenderId: "425406372365",
  appId: "1:425406372365:web:a9ab100095d7fef4969344"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.firestore()
  firebase.auth()
  firebase.storage()
  export default firebase
import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'
//Initialize Firebase
const config = {
    apiKey: "AIzaSyAxzFARpr5XpEuc1BeqiPeCcrxwZ10TyLE",
    authDomain: "scribble-cs252.firebaseapp.com",
    databaseURL: "https://scribble-cs252.firebaseio.com",
    projectId: "scribble-cs252",
    storageBucket: "scribble-cs252.appspot.com",
    messagingSenderId: "1072152629926"
  };
  const app = firebase.initializeApp(config)
  const db = firebase.database(app)
  
  export default Rebase.createClass(db)


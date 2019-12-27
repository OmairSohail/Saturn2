import firebaseConfig from './firebaseConfig'
import firebase from 'firebase'


if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig)
}

export default firebase 
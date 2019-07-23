import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAF9WjMqja3eCQZUx1cSFtYJgwC_twpf0A',
    authDomain: 'catch-with-hooks.firebaseapp.com',
    databaseURL: 'https://catch-with-hooks.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;

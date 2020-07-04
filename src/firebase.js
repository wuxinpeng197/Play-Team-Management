import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyA_PUX4Tc0vulH5ky0qSzpd0Rr2_eJC7XU",
    authDomain: "fir-b1ee7.firebaseapp.com",
    databaseURL: "https://fir-b1ee7.firebaseio.com",
    projectId: "fir-b1ee7",
    storageBucket: "fir-b1ee7.appspot.com",
    messagingSenderId: "568308361285",
    appId: "1:568308361285:web:ec757595c4febbca0a5b2c",
    measurementId: "G-6QFB2CFCYJ"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebasePlayers = firebaseDB.ref('players');
const firebaseTeams = firebaseDB.ref('teams');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseDB,
    firebasePlayers,
    firebaseTeams,
}
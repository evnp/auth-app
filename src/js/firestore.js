import firebase from "@firebase/app";
import "@firebase/firestore";

import config from '../firebase.config.json';

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;

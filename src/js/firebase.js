import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

import config from '../../firebase.config.json';

const fireapp = firebase.initializeApp(config);
const firestore = firebase.firestore(fireapp);

export {fireapp, firestore};

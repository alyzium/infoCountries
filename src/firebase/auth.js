// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC8USb5prVSu9sAUR100pAK7s2AckTt9Vw",
	authDomain: "infocountries-fc641.firebaseapp.com",
	projectId: "infocountries-fc641",
	storageBucket: "infocountries-fc641.appspot.com",
	messagingSenderId: "411491563543",
	appId: "1:411491563543:web:6d86f16e5140cb7c128452",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Configurações do firebase (mexer so caso haja erro)
 * @version         1.0.2
 * @since           1.0.2
 *
 * @export          {} Firebase
 * @return          {React.Component} 
 */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2AHjskdK7Lt48oQJ8S-i5UmWJG0-IBXw",
  authDomain: "acaosolidaria3info.firebaseapp.com",
  projectId: "acaosolidaria3info",
  storageBucket: "acaosolidaria3info.appspot.com",
  messagingSenderId: "1077223628583",
  appId: "1:1077223628583:web:c602269b38d30ed6d51302"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
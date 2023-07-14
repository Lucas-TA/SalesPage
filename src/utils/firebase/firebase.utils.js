import { 
    initializeApp //Para inicializar o Firebase, chame initializeApp() passando as credenciais do projeto do Firebase

} from 'firebase/app';
import { 
    getAuth, //Para acessar o serviço de autenticação do Firebase, chame getAuth()
    signInWithRedirect, //Para autenticar com um provedor de login, chame signInWithRedirect() ou signInWithPopup()
    signInWithPopup, 
    GoogleAuthProvider //Para autenticar com um provedor de login, chame signInWithRedirect() ou signInWithPopup()

} from "firebase/auth";
import {    
    getFirestore, //Para acessar o banco de dados Firestore, chame getFirestore()
    doc, //Para ler ou gravar um único documento, use os métodos doc()
    getDoc, //Para ler um único documento, use os métodos getDoc() e getDocs()
    setDoc //Para criar ou substituir um único documento, use os métodos set()

} from 'firebase/firestore';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWsAbggnJtZb63edwkMEgR3WHjx2BrDdc",
    authDomain: "salespage-clothing-db.firebaseapp.com",
    projectId: "salespage-clothing-db",
    storageBucket: "salespage-clothing-db.appspot.com",
    messagingSenderId: "529204244141",
    appId: "1:529204244141:web:bb3a445a65c5db51586024"
  };

// Initialize Firebase passando as credenciais do projeto do Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set Google authentication as a provider
const provider = new GoogleAuthProvider();
// Always trigger Google pop-up whenever GoogleAuthProvider is used for authentication and sign in
    provider.setCustomParameters({ prompt: 'select_account' });

// Export firebase authentication and database
export const auth = getAuth(firebaseApp);

// Sign in with Google
//signInWithPopup() é um método assíncrono que retorna uma Promise que pode ser usada para obter o resultado da operação de login.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

export const db = getFirestore(firebaseApp); // Initialize Firestore database

// Create user document in database
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // Create user document reference
    const userDocSnapshot = await getDoc(userDocRef); // Get user document snapshot from database

// If user doesn't exist in database, create a new user document
    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date(); // Get current date and time

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            }); // Create user document in database
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userDocRef; // Return user document reference
};
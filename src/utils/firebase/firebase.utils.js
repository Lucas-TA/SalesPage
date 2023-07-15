//This block imports the necessary Firebase modules for initializing the Firebase app, authenticating users, and accessing the Firestore database.
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//Here, the Firebase configuration object is defined, containing various credentials for your Firebase project. 
//The initializeApp function is called with the configuration to initialize the Firebase app.
const firebaseConfig = {
    apiKey: "AIzaSyAWsAbggnJtZb63edwkMEgR3WHjx2BrDdc",
    authDomain: "salespage-clothing-db.firebaseapp.com",
    projectId: "salespage-clothing-db",
    storageBucket: "salespage-clothing-db.appspot.com",
    messagingSenderId: "529204244141",
    appId: "1:529204244141:web:bb3a445a65c5db51586024"
  };
const firebaseApp = initializeApp(firebaseConfig);

//Setting up Google Authentication provider:
//A GoogleAuthProvider object is created, which will be used for Google sign-in authentication.
//The setCustomParameters method sets the authentication prompt to ask the user to select an account.
const googleProvider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

//The getAuth function is used to initialize the authentication service using the Firebase app.
export const auth = getAuth(firebaseApp);
//The signInWithGooglePopup and signInWithGoogleRedirect functions are exported and can be used to initiate the Google sign-in process using a popup or redirect, respectively.
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); 
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//The getFirestore function is used to initialize the Firestore database using the Firebase app. The resulting Firestore instance is exported as db and can be used to interact with the Firestore database.
export const db = getFirestore(firebaseApp);


//Creating a user document in Firestore:

//This function createUserDocumentFromAuth is exported and can be used to create a user document in Firestore based on the provided userAuth object, which represents the authenticated user.
export const createUserDocumentFromAuth = async (userAuth) => {
//First, it creates a reference to the user document using the Firestore's doc function, specifying the collection name as 'users' and the user's unique identifier (uid).
    const userDocRef = doc(db, 'users', userAuth.uid);
// Then, it retrieves the document snapshot using getDoc function to check if the user document already exists. 
    const userDocSnapshot = await getDoc(userDocRef); 

//If the user document doesn't exist, it extracts the displayName and email from userAuth and generates a createdAt timestamp.
    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
//It then uses the setDoc function to create the document in Firestore with the provided data.
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
//If any errors occur during the creation of the user document, they are logged to the console
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
//Finally, the function returns the reference to the user document.
    return userDocRef;
};
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDueT8tDjIOnPbHozo5Ea5BUUrJdcVbmbs",
  authDomain: "footballpongdb.firebaseapp.com",
  projectId: "footballpongdb",
  storageBucket: "footballpongdb.appspot.com",
  messagingSenderId: "618518676972",
  appId: "1:618518676972:web:54a91d8629bc325ca2ecc9",
  measurementId: "G-3QJWQ45W1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function onTelegramAuth(user) {
  console.log('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');

  try {
    // Reference to the player's document
    const playerRef = doc(db, 'players', user.id.toString());

    // Check if the player document already exists
    const playerDoc = await getDoc(playerRef);

    if (playerDoc.exists()) {
      // Update existing player document
      await setDoc(playerRef, {
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username || null,
        photoUrl: user.photo_url || null,
        authDate: user.auth_date,
        lastLogin: new Date().toISOString()
      }, { merge: true });
      console.log('Player document updated');
    } else {
      // Create new player document
      await setDoc(playerRef, {
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username || null,
        photoUrl: user.photo_url || null,
        authDate: user.auth_date,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        goalBits: 0  // Initialize in-game currency
      });
      console.log('New player document created');
    }

    // Here you can add additional logic, such as:
    // - Updating UI to show logged-in state
    // - Redirecting to a dashboard page
    // - Enabling features that require authentication

    alert('Login successful!');

  } catch (error) {
    console.error('Error saving player data:', error);
    alert('There was an error logging in. Please try again.');
  }
}

// Make sure the function is globally accessible
window.onTelegramAuth = onTelegramAuth;

export { db };

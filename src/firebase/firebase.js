  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore,doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore/lite";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const db = getFirestore(app)
  // TO DO: Initialise analystics 
  const analytics = getAnalytics(app);

  export{db};

// above code good and linked to html file

const TEST_USER_ID = 'testUser123';

async function initializeTestUser() {
  const userRef = doc(db, 'players', TEST_USER_ID);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      userId: TEST_USER_ID,
      username: 'TestPlayer',
      goalbitBalance: 0,
      lastPlayed: new Date(),
      totalGamesPlayed: 0
    });
    console.log('Test user initialized');
  } else {
    console.log('Test user already exists');
  }
}

async function updateTestUserGoalbits(goalbitEarned) {
  const userRef = doc(db, 'players', TEST_USER_ID);

  try {
    await updateDoc(userRef, {
      goalbitBalance: increment(goalbitEarned),
      lastPlayed: new Date(),
      totalGamesPlayed: increment(1)
    });
    console.log(`Updated test user. Added ${goalbitEarned} Goalbits.`);
  } catch (error) {
    console.error('Error updating test user:', error);
  }
}

async function checkTestUserBalance() {
  const userRef = doc(db, 'players', TEST_USER_ID);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    console.log(`Current Goalbit balance: ${userData.goalbitBalance}`);
    console.log(`Total games played: ${userData.totalGamesPlayed}`);
  } else {
    console.log('Test user not found');
  }
}

async function simulateGame(goalbitsEarned) {
  await updateTestUserGoalbits(goalbitsEarned);
  await checkTestUserBalance();
}

// Main execution
async function main() {
  await initializeTestUser();
  
  // Simulate a few games
  await simulateGame(50);
  await simulateGame(30);
  await simulateGame(100);
}

main().catch(console.error);


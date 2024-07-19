import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, increment } from 'firebase/firestore/lite';

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

export{initializeTestUser};

// index file to create database functions, all kept in firebase for easier testing now
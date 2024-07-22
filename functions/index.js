/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();

exports.telegramAuth = functions.https.onRequest(async (req, res) => {
    const user = req.body;

    const telegramData = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        auth_date: user.auth_date,
        hash: user.hash,
    };

    const token = 'YOUR_BOT_TOKEN';
    const secret = crypto.createHmac('sha256', token).update(Buffer.from([
        telegramData.id,
        telegramData.first_name,
        telegramData.last_name,
        telegramData.username,
        telegramData.auth_date,
        telegramData.hash,
    ].join('\n'))).digest('hex');

    if (secret !== user.hash) {
        return res.status(400).send('Invalid data');
    }

    // Save the user data to Firestore
    const userRef = admin.firestore().collection('users').doc(user.id.toString());
    await userRef.set(telegramData);

    res.send('User authenticated and data saved');
});

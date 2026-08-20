// ── Service Worker Firebase Cloud Messaging ─────────────────────────
// Gère la réception des notifications quand l'onglet/l'app n'est pas au premier plan.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyByKNbHk_3Al4cKHaWmUgB6CVq9ucgs2Cw",
    authDomain: "camping-haut-bugey.firebaseapp.com",
    projectId: "camping-haut-bugey",
    storageBucket: "camping-haut-bugey.firebasestorage.app",
    messagingSenderId: "584572504000",
    appId: "1:584572504000:web:46fb29ebef571e8c93ea25"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Notification reçue en arrière-plan :', payload);
    const title = (payload.notification && payload.notification.title) || 'Camping Les Gorges du Haut Bugey';
    const options = {
        body: (payload.notification && payload.notification.body) || '',
        icon: 'images/logo.png'
    };
    self.registration.showNotification(title, options);
});

// Ce fichier gère uniquement les notifications push OneSignal.
// Il est volontairement isolé dans /push/onesignal/ pour ne jamais entrer
// en conflit avec le service worker existant (sw.js) qui gère le mode hors-ligne.
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

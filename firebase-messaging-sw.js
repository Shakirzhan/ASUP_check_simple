/*eslint-disable*/
importScripts('https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '688360765057'
});

const messaging = firebase.messaging();

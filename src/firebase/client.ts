import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBP1EUlcobTh8wCQkjcyMoKiTRraH9IA5U",
    authDomain: "loganwhittensite.firebaseapp.com",
    projectId: "loganwhittensite",
    storageBucket: "loganwhittensite.appspot.com",
    messagingSenderId: "961288379000",
    appId: "1:961288379000:web:50411631fd16866f57eb8d",
    measurementId: "G-X3XXRX6DJJ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
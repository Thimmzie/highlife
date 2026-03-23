import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLgDnYv19zjLHo9nXCuAzK9VmZNXnZHb4',
  authDomain: 'highlife-9d333.firebaseapp.com',
  projectId: 'highlife-9d333',
  storageBucket: 'highlife-9d333.firebasestorage.app',
  messagingSenderId: '805178807810',
  appId: '1:805178807810:web:210dc6bdf2456528ed791b',
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

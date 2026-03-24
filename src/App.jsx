import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { authentication } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from '../src/store/userstore';
import Loading from './components/loading';
import Landing from './pages/landing';
import Login from './pages/loginpage';
import Dashboard from './pages/dashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const meetUser = useUserStore((state) => state.setUser);

  // track Firebase auth once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (currentUser) => {
      meetUser(currentUser); // update Zustand
      setLoading(false);
    });

    return () => unsubscribe();
  }, [meetUser]);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  const user = useUserStore((state) => state.user);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
        <Route
          path="/dashboard"
          element={
            useUserStore.getState().user ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;

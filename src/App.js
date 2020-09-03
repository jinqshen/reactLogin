import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth, AuthProvider } from './auth/authProvider';
const Home = React.lazy(() => import('./component/Home'));
const Login = React.lazy(() => import('./component/Login'));

var a = 0;

function App() {

  const { user } = useAuth();

  console.log(a++);
  console.log(user);

  return (
         <Suspense fallback={<></>}>
          { user ? <Home /> : <Login />}
        </Suspense>
  );
}

export default App;

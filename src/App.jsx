import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/pagesLogin/Login';
import Register from './components/Register';
import TweetList from './components/Home';
import Profile from './components/Profile';
import NotFound404 from './components/pageError/NotFound404';
import UserProfile from './components/UsersProfile';
import "./App.css";



const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/home" element={<TweetList />} />
            <Route path="/profile" element={<Profile />} />
           
            <Route path="/profile/:username" element={<UserProfile />} />
         
          </Route>

           <Route path='*' element={<NotFound404/>}/> 
        </Routes>
      </div>
    </>
  );
}

export default App;
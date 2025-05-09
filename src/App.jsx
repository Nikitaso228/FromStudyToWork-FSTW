import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainLogged from './pages/MainLogged/MainLogged';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import PersonalCabinet from './pages/PersonalCabinet/PersonalCabinet';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import CreateResume from './pages/CreateResume/CreateResume'

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <MainPage />
            </PublicRoute>
          }
        />
        <Route
          path="/main"
          element={
            <PublicRoute>
              <MainPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />

        <Route
          path="/logged"
          element={
            <ProtectedRoute>
              <MainLogged />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pc"
          element={
            <ProtectedRoute>
              <PersonalCabinet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateResume />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} /> {/* 404 для всех остальных */}
      </Routes>
    </BrowserRouter>
  )
}

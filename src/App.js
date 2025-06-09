// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Sidebar from './components/Dashboard/Sidebar';
import Header from './components/Dashboard/Header';
import Rooms from './pages/Rooms';
import Users from './pages/Users';
import Attendance from './pages/Attendance';
import Computers from './pages/Computers';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen">
          <Header />
          <main className="p-6 bg-[#F7F2F2] min-h-[calc(100vh-60px)]">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/rooms"
                element={
                  <PrivateRoute>
                    <Rooms />
                  </PrivateRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <PrivateRoute>
                    <Users />
                  </PrivateRoute>
                }
              />
              <Route
                path="/computers"
                element={
                  <PrivateRoute>
                    <Computers />
                  </PrivateRoute>
                }
              />
              <Route
                path="/attendance"
                element={
                  <PrivateRoute>
                    <Attendance />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Login />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

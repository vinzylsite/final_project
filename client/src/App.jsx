import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Watch from './pages/Watch';
import SearchResults from './pages/SearchResults';
import Subscriptions from './pages/Subscriptions';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import History from './pages/History';
import EditVideo from './pages/EditVideo';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => {
    setMobileOpen((open) => !open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            background: '#0A0E27',
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <Navbar onMenuClick={toggleDrawer} />
          <Sidebar open={mobileOpen} onClose={toggleDrawer} />
          <Box
            component="main"
            sx={{
              marginTop: 8,
              padding: '2rem',
              width: '100%',
              maxWidth: '100%',
              overflowX: 'hidden',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/search" element={<SearchResults />} />
              <Route
                path="/subscriptions"
                element={
                  <ProtectedRoute>
                    <Subscriptions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile/:id"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditVideo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

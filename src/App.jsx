import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/pages/LoginPage';
import { RegisterPage } from './features/auth/pages/RegisterPage';
import { ForgotPasswordPage } from './features/auth/pages/ForgotPasswordPage';
import { DashboardPage } from './features/dashboard/pages/DashboardPage';
import { DashboardLayout } from './layouts/dashboardLayout/DashboardLayout';

import { BotBuilderPage } from './features/bot-builder/pages/BotBuilderPage';

import { ProfilePage } from './features/profile/pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Dashboard Routes with Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          // Add this route inside DashboardLayout
          <Route path="/bot-builder" element={<BotBuilderPage />} />

          <Route path="/profile" element={<ProfilePage />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
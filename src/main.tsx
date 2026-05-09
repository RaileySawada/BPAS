import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

// Layouts
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'

// Auth Pages
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPassword'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminReports from './pages/admin/AdminReports'

// Inspector Pages
import InspectorDashboard from './pages/inspector/InspectorDashboard'
import InspectorPermits from './pages/inspector/InspectorPermits'
import InspectorTransmittal from './pages/inspector/InspectorTransmittal'
import InspectorReport from './pages/inspector/InspectorReport'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="reports" element={<AdminReports />} />
        </Route>

        {/* Inspector Routes */}
        <Route path="/inspector" element={<DashboardLayout role="inspector" />}>
          <Route index element={<Navigate to="/inspector/dashboard" replace />} />
          <Route path="dashboard" element={<InspectorDashboard />} />
          <Route path="permits" element={<InspectorPermits />} />
          <Route path="transmittal" element={<InspectorTransmittal />} />
          <Route path="inspection-report" element={<InspectorReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

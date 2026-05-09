import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  FileSpreadsheet,
  ClipboardCheck,
  Send,
  LogOut,
  Bell,
  User,
  Search,
  Menu,
  Settings,
} from 'lucide-react';
import { useState } from 'react';

interface DashboardLayoutProps {
  role: 'admin' | 'inspector';
}

export default function DashboardLayout({ role }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminNav = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Reports', path: '/admin/reports', icon: <FileText size={20} /> },
  ];

  const inspectorNav = [
    { name: 'Dashboard', path: '/inspector/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Business Permits', path: '/inspector/permits', icon: <FileSpreadsheet size={20} /> },
    { name: 'Transmittal', path: '/inspector/transmittal', icon: <Send size={20} /> },
    { name: 'Business Inspection Report', path: '/inspector/inspection-report', icon: <ClipboardCheck size={20} /> },
  ];

  const navLinks = role === 'admin' ? adminNav : inspectorNav;
  const roleName = role === 'admin' ? 'Admin' : 'Inspector';

  return (
    <div className="flex h-screen bg-[#f1f5f9] overflow-hidden font-sans">

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR - Width: 302px */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 w-[302px] bg-[#0b1f5b] text-white z-[70] transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col shadow-xl
      `}>

        {/* Sidebar Header */}
        <div className="p-8">
          <div className="flex items-center gap-4">
            <img src="/bptfologo.png" alt="BPTFO Logo" className="w-12 h-12 object-contain" />
            <div className="font-bold leading-tight">
              <div className="text-base">Business Permit <br /> Acquisition System</div>
              <div className="text-[10px] text-[#5ea9ff] uppercase tracking-wider mt-1">Calamba City</div>
            </div>
          </div>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 px-4 mt-6 space-y-1">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Main Menu</p>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all
                ${isActive
                  ? 'bg-[#f2c94c] text-[#0b1f5b] shadow-md'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <span className="shrink-0">{link.icon}</span>
              <span className="text-sm">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">User Access</p>
            <p className="text-sm font-bold mt-1 uppercase tracking-wider">{roleName} Portal</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 shrink-0 relative z-[50]">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-600 p-1"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl w-80 lg:w-96 focus-within:bg-white focus-within:border-[#1746a2] transition-all">
              <Search size={18} className="text-slate-400" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm font-medium w-full text-slate-900" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-[#1746a2] transition-colors relative">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm border border-slate-200">
                  <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="hidden lg:block text-left leading-none">
                  <p className="text-sm font-bold text-slate-900">Maria Teresa</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{roleName}</p>
                </div>
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-[80]" onClick={() => setProfileOpen(false)}></div>
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-[90]">
                    <div className="px-5 py-2 border-b border-slate-50 mb-2">
                      <p className="font-bold text-slate-900 text-sm">Maria Teresa Bascon</p>
                    </div>
                    <button className="w-full flex items-center gap-3 px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1746a2] transition-all">
                      <User size={16} /> My Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#1746a2] transition-all">
                      <Settings size={16} /> Settings
                    </button>
                    <div className="px-3 mt-3">
                      <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-rose-50 text-rose-600 font-bold text-sm hover:bg-rose-100 transition-all"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-[#f8fafc]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

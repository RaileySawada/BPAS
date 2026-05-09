import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div
      className="w-full min-h-screen bg-[#f8fafc] flex items-center justify-center relative overflow-hidden"
    >
      {/* Abstract Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

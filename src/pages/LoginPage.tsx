import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const role = formData.get('role');

    setTimeout(() => {
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/inspector/dashboard');
      }
    }, 500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-6 lg:p-8 relative overflow-hidden bg-[#f8fafc]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#1746a2]/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#f2c94c]/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-6xl min-h-screen md:min-h-0 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-white rounded-none md:rounded-[3rem] shadow-[0_25px_100px_-12px_rgba(0,0,0,0.15)] overflow-hidden border-none md:border md:border-slate-100 relative z-10 transition-all duration-500">

        {/* Left Side: Desktop Brand Hero (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-[#0b1f5b] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-16">
              <div className="p-1 bg-white rounded-2xl shadow-2xl">
                <img src="/bptfologo.png" alt="BPTFO logo" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight leading-none mb-2">Business Permit <br /> Acquisition System</h1>
                <p className="text-xs text-[#5ea9ff] uppercase font-black tracking-[0.3em]">Calamba City</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-6xl font-black leading-[1.05] tracking-tighter">
                Efficient inspection <br />
                reporting with a <br />
                <span className="text-[#f2c94c]">clean digital workflow.</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-lg opacity-80">
                Designed for administrators and inspectors, the system supports secure access, organized business records, and report tracking.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-[0.4em]">
            <div className="w-12 h-px bg-slate-700"></div>
            City Government of Calamba · BPTFO
          </div>
        </div>

        {/* Right Side: Login Panel (Adaptive Mobile Visuals) */}
        <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white relative">

          {/* Mobile-Only Header Branding */}
          <div className="lg:hidden flex flex-col items-center text-center mb-12 animate-fade-down">
            <div className="p-3 bg-white border border-slate-100 rounded-[2rem] shadow-xl mb-6">
              <img src="/bptfologo.png" alt="BPTFO logo" className="w-16 h-16 object-contain" />
            </div>
            <h1 className="text-xl font-black tracking-tight leading-none text-[#0b1f5b] mb-1">Business Permit Acquisition System</h1>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">City Government of Calamba</p>
          </div>

          <div className="max-w-sm mx-auto w-full">
            <div className="mb-10 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border border-slate-200">
                <ShieldCheck size={14} className="text-[#0b1f5b]" />
                System Access
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Welcome</h3>
              <p className="text-slate-500 font-bold text-sm md:text-base opacity-80">Sign in to continue to the paperless inspection reporting dashboard.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 md:space-y-8">

              {/* Role Selector (Modernized for Mobile) */}
              <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-4 md:mb-8 border border-slate-200 shadow-inner">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="role" value="admin" defaultChecked className="peer sr-only" />
                  <div className="py-3.5 text-center text-xs font-black text-slate-500 rounded-xl peer-checked:bg-white peer-checked:text-[#0b1f5b] peer-checked:shadow-xl transition-all uppercase tracking-widest">
                    Admin
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="role" value="inspector" className="peer sr-only" />
                  <div className="py-3.5 text-center text-xs font-black text-slate-500 rounded-xl peer-checked:bg-white peer-checked:text-[#0b1f5b] peer-checked:shadow-xl transition-all uppercase tracking-widest">
                    Inspector
                  </div>
                </label>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Username</label>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1746a2] transition-colors">
                    <User size={20} strokeWidth={2.5} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full pl-14 pr-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:border-[#1746a2] focus:ring-4 focus:ring-[#1746a2]/5 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
                  <Link to="/forgot-password" title="Forgot Password" className="text-[10px] font-black text-[#1746a2] hover:text-[#0b1f5b] transition-colors uppercase tracking-widest underline underline-offset-4 decoration-slate-200">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1746a2] transition-colors">
                    <Lock size={20} strokeWidth={2.5} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full pl-14 pr-14 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:border-[#1746a2] focus:ring-4 focus:ring-[#1746a2]/5 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 md:py-6 bg-[#0b1f5b] hover:bg-[#1746a2] text-white rounded-[2rem] font-black text-base md:text-lg shadow-2xl shadow-[#0b1f5b]/30 transition-all flex items-center justify-center gap-4 active:scale-95 group disabled:opacity-70 uppercase tracking-[0.2em] mt-4"
              >
                {isLoading ? "Authenticating..." : (
                  <>
                    Login <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-12 md:mt-20 text-center">
              <p className="text-[9px] md:text-[10px] text-slate-300 font-black uppercase tracking-[0.3em] leading-relaxed">
                Official system of the Business Permit & <br className="md:hidden" /> Tricycle Franchising Office, <br />
                <span className="text-slate-400 uppercase tracking-widest mt-1 inline-block">Calamba City. Authorized personnel only.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

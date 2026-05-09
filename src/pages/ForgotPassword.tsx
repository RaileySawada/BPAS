import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-6 lg:p-8 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0b1f5b]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="w-full max-w-6xl min-h-screen md:min-h-0 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-white rounded-none md:rounded-[3rem] shadow-[0_25px_100px_-12px_rgba(0,0,0,0.15)] overflow-hidden border-none md:border md:border-slate-100 relative z-10 transition-all duration-500">
        
        {/* Left Side: Desktop Progress (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-[#0b1f5b] text-white relative">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-20">
              <div className="p-1 bg-white rounded-2xl shadow-xl">
                <img src="/bptfologo.png" alt="Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-black leading-tight">Business Permit <br /> Acquisition System</h1>
                <p className="text-[10px] text-[#5ea9ff] uppercase font-black tracking-[0.4em] mt-1">Paperless Inspection Report</p>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-5xl font-black leading-tight tracking-tighter">
                Reset your <br />
                <span className="text-[#f2c94c]">password</span>
              </h2>
              <p className="text-lg text-slate-300 font-medium max-w-xs leading-relaxed opacity-80">Follow the three simple steps to verify your identity and set a new secure password for your account.</p>
              
              <div className="space-y-10">
                {[
                  { title: 'Find your account', desc: 'Enter your username or email address' },
                  { title: 'Verify identity', desc: 'Enter the 6-digit code sent to you' },
                  { title: 'Set new password', desc: 'Choose a strong, secure password' },
                ].map((s, i) => (
                  <div key={i} className={`flex items-start gap-6 transition-all duration-700 ${step === i + 1 ? 'opacity-100 scale-105 origin-left' : 'opacity-30'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg border-2 ${
                      step === i + 1 ? 'bg-[#f2c94c] border-[#f2c94c] text-[#0b1f5b] shadow-xl shadow-[#f2c94c]/20' : 'border-white/20 text-white'
                    }`}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg tracking-tight leading-none mb-2">{s.title}</h4>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-slate-500 font-black uppercase tracking-[0.5em]">Calamba City Government</div>
        </div>

        {/* Right Side: Form Panel (Adaptive Mobile Visuals) */}
        <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white relative">
          
          {/* Mobile-Only Header Branding & Progress */}
          <div className="lg:hidden flex flex-col items-center text-center mb-10 animate-fade-down">
            <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-xl mb-6">
              <img src="/bptfologo.png" alt="Logo" className="w-12 h-12 object-contain" />
            </div>
            <h1 className="text-lg font-black text-[#0b1f5b] tracking-tight uppercase">Account Recovery</h1>
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= i ? 'bg-[#f2c94c] shadow-[0_0_10px_#f2c94c]' : 'bg-slate-100'}`}></div>
              ))}
            </div>
          </div>

          <div className="max-w-sm mx-auto w-full">
            
            {step === 1 && (
              <div className="animate-fade-up">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border border-slate-200">
                    Step 01 / Find Account
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Forgot your password?</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">Enter your username or registered email address and we'll send you a verification code.</p>
                </div>
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Username or Email</label>
                    <div className="relative group">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1746a2] transition-colors">
                        <User size={22} strokeWidth={2.5} />
                      </div>
                      <input type="text" placeholder="Enter your identifier" className="w-full pl-14 pr-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:border-[#1746a2] font-bold text-slate-900 shadow-sm" required />
                    </div>
                    <p className="text-[9px] text-slate-400 font-bold italic ml-1 mt-2">A one-time verification code will be sent to your inbox.</p>
                  </div>
                  <button type="submit" className="w-full py-5 md:py-6 bg-[#0b1f5b] text-white rounded-[2rem] font-black uppercase tracking-[0.15em] flex items-center justify-center gap-4 hover:bg-[#1746a2] transition-all shadow-2xl shadow-[#0b1f5b]/20 active:scale-95 group mt-4">
                    Send Code <ArrowRight size={22} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border border-slate-200">
                    Step 02 / Verification
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Enter the code</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">A 6-digit verification code was sent to your email. Enter it below to continue.</p>
                </div>
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                  <div className="flex gap-2 md:gap-3">
                    {[1,2,3,4,5,6].map((i) => (
                      <input key={i} type="text" maxLength={1} className="w-full h-14 md:h-16 bg-slate-50 border-2 border-slate-100 rounded-xl text-center font-black text-xl md:text-2xl text-[#0b1f5b] outline-none focus:bg-white focus:border-[#1746a2] transition-all shadow-sm" required />
                    ))}
                  </div>
                  <button type="submit" className="w-full py-5 md:py-6 bg-[#0b1f5b] text-white rounded-[2rem] font-black uppercase tracking-[0.15em] flex items-center justify-center gap-4 hover:bg-[#1746a2] transition-all shadow-2xl shadow-[#0b1f5b]/20 active:scale-95 group">
                    Verify Code <ArrowRight size={22} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button type="button" onClick={prevStep} className="w-full py-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-[#0b1f5b] transition-colors underline decoration-slate-200 underline-offset-4 decoration-2">Change Account</button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border border-slate-200">
                    Step 03 / New Password
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Set New Password</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">Choose a strong, secure password that you haven't used before.</p>
                </div>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">New Password</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300">
                          <Lock size={20} strokeWidth={2.5} />
                        </div>
                        <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:border-[#1746a2] font-bold text-slate-900 shadow-sm" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm Password</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300">
                          <Lock size={20} strokeWidth={2.5} />
                        </div>
                        <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:border-[#1746a2] font-bold text-slate-900 shadow-sm" required />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-5 md:py-6 bg-[#0b1f5b] text-white rounded-[2rem] font-black uppercase tracking-[0.15em] flex items-center justify-center gap-4 hover:bg-[#1746a2] transition-all shadow-2xl shadow-[#0b1f5b]/20 active:scale-95 group mt-4">
                    Reset Password <ArrowRight size={22} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            )}

            {step === 4 && (
              <div className="text-center animate-fade-up">
                <div className="w-24 h-24 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 text-emerald-600 shadow-inner group">
                  <CheckCircle2 size={56} strokeWidth={3} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Success!</h3>
                <p className="text-slate-500 font-bold text-base mb-12 leading-relaxed px-4 opacity-80">Your password has been updated. You can now sign in with your new credentials.</p>
                <button onClick={() => navigate('/')} className="w-full py-5 md:py-6 bg-[#0b1f5b] text-white rounded-[2rem] font-black uppercase tracking-[0.15em] flex items-center justify-center gap-4 hover:bg-[#1746a2] transition-all shadow-2xl shadow-[#0b1f5b]/20 active:scale-95 group">
                  Return to Sign In <ArrowRight size={22} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}

            {step < 4 && (
              <div className="mt-12 md:mt-20 text-center">
                <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black text-slate-300 hover:text-[#0b1f5b] transition-all uppercase tracking-[0.4em] group">
                  <ArrowLeft size={18} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> Back to Sign In
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Search,
  Plus,
  Filter,
  ClipboardList,
  Eye,
  Calendar,
  MoreHorizontal,
  FileText,
  Building2,
  MapPin,
  User,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Building,
  Briefcase,
  Users,
  DollarSign,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InspectorReport() {
  const [modalOpen, setModalOpen] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalOpen]);

  const reports = [
    {
      id: 'BIR-2026-0012',
      bin: 'BIN-2026-1088',
      name: 'XYZ Food Supply',
      location: 'Parian, Calamba City',
      nature: 'Retail / Wholesale',
      psic: '4711',
      date: 'May 9, 2026',
      findings: 'Compliant with minor notes on storage.',
      status: 'Draft',
      owner: 'Juan Dela Cruz',
      contact: '0912-345-6789'
    },
  ];

  return (
    <>
      <div className="space-y-10 w-full animate-fade-up">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 bg-[#0b1f5b] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-gradient-to-l from-[#f2c94c]/20 to-transparent skew-x-[-20deg] group-hover:translate-x-10 transition-transform duration-1000"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#1746a2]/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black text-[#5ea9ff] uppercase tracking-[0.3em] border border-white/10 backdrop-blur-md">
              <ClipboardList size={14} className="text-[#f2c94c]" />
              Business Inspection Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-2 tracking-tight leading-none">Official Inspection Records</h2>
            <p className="text-slate-300 font-bold text-base md:text-lg opacity-80 max-w-xl">Centralized registry of digitalized field findings and business compliance status for Calamba City.</p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="relative z-10 px-8 md:px-10 py-5 md:py-6 bg-white text-[#0b1f5b] rounded-[2rem] font-black shadow-2xl hover:bg-[#f2c94c] transition-all active:scale-95 flex items-center justify-center gap-4 group/btn overflow-hidden"
          >
            <span className="relative z-10 uppercase text-xs tracking-[0.2em]">Create New Report</span>
            <Plus size={22} strokeWidth={3} className="relative z-10 group-hover/btn:rotate-90 transition-transform duration-500" />
          </button>
        </div>

        {/* Modern Search & Filters */}
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 shadow-sm border border-slate-100 flex flex-wrap items-center gap-6 md:gap-8">
          <div className="flex-1 min-w-[280px] relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1746a2] transition-colors" size={20} />
            <input
              type="text"
              placeholder="Filter Records..."
              className="w-full pl-14 pr-8 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] outline-none focus:bg-white focus:border-[#1746a2] transition-all font-bold text-slate-900 placeholder:text-slate-300"
            />
          </div>

          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="relative group flex-1 md:min-w-[200px]">
              <select className="w-full appearance-none px-6 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] outline-none focus:bg-white focus:border-[#1746a2] transition-all font-black text-xs text-slate-600 cursor-pointer">
                <option>All Records</option>
                <option>Draft Reports</option>
                <option>Validated</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={18} />
            </div>
            <button className="h-[56px] md:h-[64px] w-[56px] md:w-[64px] flex items-center justify-center bg-slate-950 text-white rounded-[1.5rem] hover:bg-[#0b1f5b] shadow-xl active:scale-90 transition-all">
              <Filter size={22} />
            </button>
          </div>
        </div>

        {/* Records List */}
        <div className="space-y-6">
          {reports.map((report, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-10">

                <div className="space-y-8 md:space-y-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-[#1746a2] group-hover:bg-[#0b1f5b] group-hover:text-white transition-all shadow-inner shrink-0">
                      <Building2 strokeWidth={2.5} className="w-8 h-8 md:w-9 md:h-9" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{report.name}</h4>
                        <span className="px-3 py-1 bg-slate-50 text-slate-400 border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest">
                          {report.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><ShieldCheck size={14} /> {report.id}</span>
                        <span className="flex items-center gap-2 text-[#f2c94c] bg-slate-950 px-2 py-0.5 rounded">BIN: {report.bin}</span>
                        <span className="flex items-center gap-2"><MapPin size={14} /> {report.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 p-6 md:p-8 bg-slate-50/50 rounded-[2rem] md:rounded-[2.5rem] border border-slate-50">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Owner</p>
                      <p className="text-sm font-black text-slate-800">{report.owner}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Nature</p>
                      <p className="text-sm font-black text-slate-800">{report.nature}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Contact</p>
                      <p className="text-sm font-black text-emerald-600">{report.contact}</p>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col items-center justify-center gap-4 lg:pl-10 lg:border-l border-slate-100">
                  <button className="flex-1 lg:flex-none w-full lg:w-16 h-14 lg:h-16 flex items-center justify-center bg-white border border-slate-100 text-slate-300 hover:bg-[#0b1f5b] hover:text-white rounded-2xl transition-all shadow-sm">
                    <Eye size={24} />
                  </button>
                  <button className="flex-1 lg:flex-none w-full lg:w-16 h-14 lg:h-16 flex items-center justify-center bg-white border border-slate-100 text-slate-300 hover:bg-[#1746a2] hover:text-white rounded-2xl transition-all shadow-sm">
                    <ClipboardList size={24} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN OVERLAY MODAL - MOBILE OPTIMIZED */}
      {modalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 lg:p-8 overflow-hidden">
          {/* Animated Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-500"
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-[1280px] h-full md:h-[95vh] bg-white rounded-none md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-700">

            {/* Modal Header - Sticky & Responsive */}
            <div className="p-6 md:p-8 lg:p-10 bg-[#0b1f5b] text-white shrink-0 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32 blur-3xl"></div>
              <div className="relative z-10 flex items-center gap-4 md:gap-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                  <img src="/bptfologo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-black tracking-tight leading-none uppercase">Inspection Report</h3>
                  <p className="text-[#5ea9ff] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-1">Calamba City · Digital Form</p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Scrollable Form */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16 custom-scrollbar bg-white">
              <form className="space-y-12 md:space-y-20 max-w-6xl mx-auto pb-10">

                {/* Section Header Macro */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pb-8 md:pb-12 border-b border-slate-100">
                  <div className="col-span-1 lg:col-span-2 space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      Inspection Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['NEW', 'RENEWAL', 'FULL RETIREMENT', 'PARTIAL RETIREMENT'].map(type => (
                        <label key={type} className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl cursor-pointer hover:border-[#1746a2] transition-all">
                          <input type="checkbox" className="w-4 h-4 accent-[#0b1f5b]" required />
                          <span className="text-[9px] font-black text-slate-600">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">Date <span className="text-rose-500">*</span></label>
                    <input type="date" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-900 focus:bg-white focus:border-[#1746a2] outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">B.I.N. <span className="text-rose-500">*</span></label>
                    <input type="text" required placeholder="BIN Number" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-900 focus:bg-white focus:border-[#1746a2] outline-none" />
                  </div>
                </div>

                {/* FORM SECTIONS (REDUCED SPACING ON MOBILE) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                  <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-[#f2c94c] pl-4 py-1">Amendments</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['OWNERSHIP', 'ADDRESS', 'NATURE', 'NAME', 'OWNERSHIP FORM', 'OTHERS'].map(opt => (
                        <label key={opt} className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                          <input type="checkbox" className="w-4 h-4 accent-[#0b1f5b]" />
                          <span className="text-[9px] font-black text-slate-500 uppercase">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-[#1746a2] pl-4 py-1">Ownership Form <span className="text-rose-500">*</span></h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['SINGLE PROP', 'PARTNERSHIP', 'CORPORATION', 'OPC', 'ASSOCIATION', 'COOP'].map(opt => (
                        <label key={opt} className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                          <input type="radio" name="ownership" required className="w-4 h-4 accent-[#0b1f5b]" />
                          <span className="text-[9px] font-black text-slate-500 uppercase">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Identity Information */}
                <div className="space-y-8">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-[#0b1f5b] pl-4 py-1">Business & Taxpayer</h4>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">Business Name <span className="text-rose-500">*</span></label>
                      <input type="text" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:bg-white focus:border-[#0b1f5b] outline-none" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {['BLDG/UNIT', 'STREET', 'BARANGAY', 'CITY', 'PROVINCE'].map(f => (
                        <div key={f} className="space-y-1.5">
                          <label className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">{f} <span className="text-rose-500">*</span></label>
                          <input type="text" required className="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold focus:bg-white focus:border-[#0b1f5b]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Classification Table - Mobile Scrollable */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-amber-500 pl-4 py-1">Nature of Business</h4>
                  <div className="relative group">
                    <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-xl custom-scrollbar">
                      <table className="w-full text-left min-w-[600px]">
                        <thead className="bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                          <tr>
                            <th className="px-6 py-4 w-12">#</th>
                            <th className="px-6 py-4">Nature of Business <span className="text-rose-500">*</span></th>
                            <th className="px-6 py-4 w-40">PSIC Code</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {[1, 2, 3, 4].map(i => (
                            <tr key={i}>
                              <td className="px-6 py-3 text-xs font-black text-slate-300">{i}</td>
                              <td className="px-6 py-3"><input type="text" required={i === 1} className="w-full bg-transparent outline-none text-xs font-black text-slate-700" /></td>
                              <td className="px-6 py-3"><input type="text" required={i === 1} className="w-full bg-transparent outline-none text-xs font-black text-slate-700" /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg border border-slate-100 pointer-events-none animate-bounce">
                      <ChevronRight size={16} className="text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Capital & Investment */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                  <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-[#1746a2] pl-4 py-1">Capital Investment <span className="text-rose-500">*</span></h4>
                    <div className="relative group">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-[#0b1f5b]">₱</span>
                      <input type="number" required className="w-full pl-12 pr-6 py-4 bg-slate-950 text-white rounded-2xl font-black text-2xl shadow-xl focus:ring-4 focus:ring-[#1746a2]/20 outline-none" placeholder="0.00" />
                    </div>
                  </div>

                  <div className="bg-[#0b1f5b] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mt-24 -mr-24 blur-2xl"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full space-y-6">
                      <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Capital</span>
                        <span className="text-xl md:text-2xl font-black tracking-tight leading-none text-[#f2c94c]">₱ 0.00</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Investment</span>
                        <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-[#f2c94c]">₱ 0.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Findings & Remarks */}
                <div className="space-y-8">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-4 py-1 flex items-center gap-2">
                    Official Findings <span className="text-rose-500">*</span>
                  </h4>
                  <textarea required rows={6} className="w-full px-6 py-6 bg-slate-50 border border-slate-100 rounded-[2rem] outline-none focus:bg-white focus:border-[#0b1f5b] font-bold text-slate-900 resize-none shadow-inner transition-all"></textarea>
                </div>

                {/* Final Signatures (Responsive Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Acknowledged By <span className="text-rose-500">*</span></h4>
                    <div className="grid grid-cols-1 gap-4">
                      <input type="text" required placeholder="Full Name" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold" />
                      <input type="text" required placeholder="Position" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Inspector In-Charge</h4>
                    <div className="p-6 md:p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-6">
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center p-1 shrink-0">
                          <img src="/bptfologo.png" alt="" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-lg md:text-xl font-black text-[#f2c94c]">TERE BASCON</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">License Inspector</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date & Time <span className="text-rose-500">*</span></label>
                        <input type="datetime-local" required className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl font-black text-white outline-none focus:bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>

            {/* Modal Footer - Sticky & Adaptive */}
            <div className="p-6 md:p-10 lg:p-12 bg-slate-50 border-t border-slate-100 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-10">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="hidden md:flex w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl items-center justify-center shrink-0">
                  <AlertCircle size={24} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] max-w-sm leading-relaxed">
                  Authorized entry. Data is protected by the <span className="text-slate-900">City Government of Calamba</span>.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex-1 sm:flex-none px-8 md:px-10 py-4 md:py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-sm"
                >
                  Discard
                </button>
                <button className="flex-1 sm:flex-none px-10 md:px-12 py-4 md:py-5 bg-[#0b1f5b] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#1746a2] transition-all flex items-center justify-center gap-3">
                  Commit <ArrowRight size={18} strokeWidth={3} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

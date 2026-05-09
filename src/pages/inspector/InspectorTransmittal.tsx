import {
  Send,
  Calendar,
  Users,
  ClipboardCheck,
  Search,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  PhoneCall,
  LayoutGrid,
  ArrowRight
} from 'lucide-react';

export default function InspectorTransmittal() {
  const transmittals = [
    { id: 'TRN-2026-001', date: 'May 9, 2026', department: 'BPLO / Admin', count: '12', preparedBy: 'Maria Teresa Bascon', status: 'Draft' },
    { id: 'TRN-2026-002', date: 'May 8, 2026', department: 'City Health Office', count: '05', preparedBy: 'Maria Teresa Bascon', status: 'For Signature' },
  ];

  const assignments = [
    { zone: 'Zone 1 - Real', inspector: 'Maria Teresa', schedule: 'May 10, 2026', contact: '0912-345-6789' },
    { zone: 'Zone 4 - Canlubang', inspector: 'Jose Rizal', schedule: 'May 11, 2026', contact: '0998-765-4321' },
  ];

  return (
    <div className="space-y-10 w-full animate-fade-up">

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 bg-[#0b1f5b] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32 blur-3xl"></div>
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1746a2]/20 rounded-full text-[10px] font-black text-[#5ea9ff] uppercase tracking-[0.3em] border border-white/10">
            <Send size={14} className="text-[#f2c94c]" />
            Active Documentation Hub
          </div>
          <h2 className="text-4xl font-black tracking-tight leading-none">Transmittal & Deployment</h2>
          <p className="text-slate-300 font-bold text-lg opacity-80 max-w-xl">Centralized management for document forwarding and field personnel assignments.</p>
        </div>
        <button className="relative z-10 bg-[#f2c94c] text-[#0b1f5b] px-10 py-5 rounded-[2rem] font-black shadow-2xl hover:brightness-110 transition-all flex items-center gap-4 text-xs uppercase tracking-[0.2em] group/btn overflow-hidden">
          <Plus size={22} strokeWidth={3} className="group-hover/btn:rotate-90 transition-transform duration-500" /> New Transmittal
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_450px] gap-10">

        <div className="space-y-10">
          {/* Main Transmittal Log */}
          <div className="bg-white rounded-[3.5rem] p-10 lg:p-14 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">Recent Transmittal Log</h3>
              <div className="relative w-full md:w-80 group">
                <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0b1f5b]" />
                <input type="text" placeholder="Search by TRN ID..." className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#1746a2] text-sm font-bold text-slate-900 shadow-inner" />
              </div>
            </div>

            <div className="space-y-6">
              {transmittals.map((trn, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-default">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-300 group-hover:bg-[#0b1f5b] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                      <ClipboardCheck size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="text-xl font-black text-slate-900 tracking-tight">{trn.id}</h4>
                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${trn.status === 'Draft' ? 'bg-slate-100 text-slate-500' : 'bg-amber-50 text-amber-600 border border-amber-100'
                          }`}>
                          {trn.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Calendar size={14} className="text-[#1746a2]/40" /> {trn.date}</span>
                        <span className="flex items-center gap-2"><Users size={14} className="text-[#1746a2]/40" /> {trn.department}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end gap-10 border-t md:border-t-0 pt-6 md:pt-0 border-slate-50">
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Documents</p>
                      <p className="text-lg font-black text-[#0b1f5b] tracking-tight">{trn.count} Items</p>
                    </div>
                    <button className="w-14 h-14 flex items-center justify-center bg-slate-50 hover:bg-[#0b1f5b] hover:text-white rounded-2xl text-slate-300 transition-all group/btn shadow-sm active:scale-90">
                      <ChevronRight size={28} className="group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR: ASSIGNMENTS & SCHEDULE */}
        <div className="space-y-10">

          <div className="bg-white rounded-[3.5rem] p-10 lg:p-12 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Zone Assignments</h3>
              <LayoutGrid size={24} className="text-slate-200" />
            </div>
            <div className="space-y-6">
              {assignments.map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 bg-[#0b1f5b] text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#0b1f5b]/20">
                      {item.zone}
                    </span>
                    <p className="text-[10px] font-black text-[#1746a2] uppercase tracking-widest">{item.schedule}</p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
                      <img src="/profile.png" alt="" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <div>
                      <p className="text-base font-black text-slate-900 tracking-tight leading-none mb-1">{item.inspector}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Lead Inspector</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                    <div className="flex items-center gap-2 text-[11px] font-black text-slate-500">
                      <PhoneCall size={14} className="text-emerald-500" />
                      {item.contact}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-black text-[#1746a2] hover:underline cursor-pointer">
                      View Schedule <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3.5rem] p-12 shadow-sm border border-slate-100 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2c94c]/5 rounded-full blur-2xl"></div>
            <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform">
              <Clock size={36} className="text-slate-300 group-hover:text-[#1746a2] transition-colors" />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Deployment Schedule</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-10 leading-relaxed italic">
              Synchronized with the <br /> Business Permit Registry
            </p>
            <button className="w-full py-4 bg-[#0b1f5b] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#1746a2] transition-all shadow-xl shadow-[#0b1f5b]/20">
              Open Master Calendar
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

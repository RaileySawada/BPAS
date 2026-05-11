import { TrendingUp, FileCheck, AlertCircle, ArrowRight, Plus, ChevronRight, FileSpreadsheet, ClipboardList, X, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [summaryOpen, setSummaryOpen] = useState(false);

  useEffect(() => {
    if (summaryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [summaryOpen]);

  const stats = [
    { label: 'Pending Reports', value: '12', color: 'bg-amber-100 text-amber-700', icon: <AlertCircle size={24} />, status: 'For validation' },
    { label: 'Validated', value: '28', color: 'bg-emerald-100 text-emerald-700', icon: <FileCheck size={24} />, status: 'Approved' },
    { label: 'Returned', value: '04', color: 'bg-slate-100 text-slate-600', icon: <Plus size={24} className="rotate-45" />, status: 'Needs revision' },
    { label: 'Total Inspections', value: '44', color: 'bg-blue-100 text-blue-700', icon: <TrendingUp size={24} />, status: 'This month' },
  ];

  const recentReports = [
    { name: 'ABC Trading and Services', type: 'New application', location: 'Barangay Real', status: 'Pending', time: '2 hours ago' },
    { name: 'Calamba Food Mart', type: 'Renewal', location: 'Sta. Rosa Road', status: 'Approved', time: '5 hours ago' },
  ];

  // Full inspection report data for the summary modal
  const inspectionReports = [
    {
      ban: '001-05-2026-0000012',
      name: 'XYZ Food Supply',
      location: 'Parian, Calamba City',
      nature: 'Retail / Wholesale',
      type: 'New',
      date: 'May 9, 2026',
      findings: 'Compliant with minor notes on storage.',
      status: 'Draft',
      inspector: 'Tere Bascon',
    },
    {
      ban: '002-05-2026-0000045',
      name: 'JLC Printing Services',
      location: 'Milagrosa, Calamba City',
      nature: 'Services',
      type: 'Retirement',
      date: 'May 5, 2026',
      findings: 'All documents in order. Cleared for retirement.',
      status: 'Approved',
      inspector: 'Tere Bascon',
    },
    {
      ban: '003-05-2026-0000102',
      name: 'Tech Haven Gadgets',
      location: 'Poblacion, Calamba City',
      nature: 'Retail',
      type: 'New',
      date: 'May 3, 2026',
      findings: 'Fire exits blocked — needs immediate rectification.',
      status: 'Returned',
      inspector: 'Tere Bascon',
    },
    {
      ban: '004-05-2026-0000120',
      name: 'Calamba Food Mart',
      location: 'Sta. Rosa Road, Calamba City',
      nature: 'Food & Beverage',
      type: 'Renewal',
      date: 'May 2, 2026',
      findings: 'Passed all safety and sanitation checks.',
      status: 'Approved',
      inspector: 'Tere Bascon',
    },
    {
      ban: '005-05-2026-0000135',
      name: 'ABC Trading and Services',
      location: 'Barangay Real, Calamba City',
      nature: 'Trading',
      type: 'New',
      date: 'May 9, 2026',
      findings: 'Awaiting final inspection from health department.',
      status: 'Pending',
      inspector: 'Tere Bascon',
    },
  ];

  const summaryStats = [
    { label: 'Total Reports', value: inspectionReports.length, color: 'bg-blue-100 text-blue-700', accent: '#1746a2' },
    { label: 'Approved', value: inspectionReports.filter(r => r.status === 'Approved').length, color: 'bg-emerald-100 text-emerald-700', accent: '#059669' },
    { label: 'Pending', value: inspectionReports.filter(r => r.status === 'Pending').length, color: 'bg-amber-100 text-amber-700', accent: '#d97706' },
    { label: 'Returned', value: inspectionReports.filter(r => r.status === 'Returned').length, color: 'bg-rose-100 text-rose-700', accent: '#e11d48' },
    { label: 'Draft', value: inspectionReports.filter(r => r.status === 'Draft').length, color: 'bg-slate-100 text-slate-600', accent: '#475569' },
  ];

  const statusStyle: Record<string, string> = {
    Approved: 'bg-emerald-100 text-emerald-700',
    Pending: 'bg-amber-100 text-amber-700',
    Returned: 'bg-rose-100 text-rose-600',
    Draft: 'bg-slate-100 text-slate-500',
  };

  return (
    <>
      <div className="space-y-8 w-full">

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-[#0b1f5b] rounded-3xl p-8 lg:p-12 text-white shadow-lg">
          <div className="space-y-2">
            <p className="text-[#5ea9ff] font-bold uppercase tracking-widest text-xs">Saturday · May 09, 2026</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Welcome, Maria Teresa</h2>
            <p className="text-slate-300 font-medium">Business Permit Acquisition System · Administrator Portal</p>
          </div>
          <button className="px-8 py-4 bg-[#f2c94c] text-[#0b1f5b] rounded-xl font-bold shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-3">
            Manage Reports <ArrowRight size={20} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mb-6`}>
                {stat.icon}
              </div>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-bold text-slate-900">{stat.value}</h3>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{stat.status}</span>
                <ChevronRight size={16} className="text-slate-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900">Recent Inspection Reports</h3>
              <button className="text-sm font-bold text-[#1746a2] hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {recentReports.map((report, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                      <FileSpreadsheet size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{report.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{report.type} · {report.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${
                      report.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {report.status}
                    </span>
                    <span className="text-[9px] font-bold text-slate-300 uppercase">{report.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1746a2] rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: 'New Report', icon: <Plus size={18} />, onClick: undefined },
                  { label: 'Generate List', icon: <FileSpreadsheet size={18} />, onClick: undefined },
                  { label: 'View Analytics', icon: <TrendingUp size={18} />, onClick: undefined },
                  { label: 'Inspection Report Summary', icon: <ClipboardList size={18} />, onClick: () => setSummaryOpen(true) },
                ].map((action, i) => (
                  <button
                    key={i}
                    onClick={action.onClick}
                    className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#f2c94c]">{action.icon}</span>
                      <span className="font-bold text-sm">{action.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-white/30" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Inspection Report Summary Modal ── */}
      {summaryOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 lg:p-8 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            onClick={() => setSummaryOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-[1100px] h-full md:h-[92vh] bg-white rounded-none md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden">

            {/* Header */}
            <div className="p-6 md:p-10 bg-[#0b1f5b] text-white shrink-0 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                  <ClipboardList size={22} className="text-[#f2c94c]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-black tracking-tight leading-none">Inspection Report Summary</h3>
                  <p className="text-[#5ea9ff] text-[10px] font-black uppercase tracking-[0.25em] mt-1">Calamba City · Administrator View</p>
                </div>
              </div>
              <button
                onClick={() => setSummaryOpen(false)}
                className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <X size={22} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 bg-slate-50 space-y-8">

              {/* Summary Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {summaryStats.map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col gap-2">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${s.color} px-2 py-1 rounded-lg w-fit`}>{s.label}</span>
                    <p className="text-4xl font-black text-slate-900">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Reports Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                  <Building2 size={18} className="text-[#1746a2]" />
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">All Inspection Records</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left min-w-[700px]">
                    <thead className="bg-slate-50 border-b border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <tr>
                        <th className="px-8 py-4">BAN</th>
                        <th className="px-8 py-4">Business</th>
                        <th className="px-8 py-4">Type</th>
                        <th className="px-8 py-4">Date</th>
                        <th className="px-8 py-4">Findings</th>
                        <th className="px-8 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {inspectionReports.map((r, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-8 py-5">
                            <p className="font-black text-slate-900 text-xs flex items-center gap-1">
                              <ShieldCheck size={11} className="text-[#1746a2] shrink-0" /> {r.ban}
                            </p>
                          </td>
                          <td className="px-8 py-5">
                            <p className="font-black text-slate-800 text-xs">{r.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 flex items-center gap-1 mt-0.5">
                              <MapPin size={10} /> {r.location}
                            </p>
                          </td>
                          <td className="px-8 py-5">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[9px] font-black uppercase">{r.type}</span>
                          </td>
                          <td className="px-8 py-5 text-xs font-bold text-slate-500">{r.date}</td>
                          <td className="px-8 py-5 text-xs text-slate-500 font-medium max-w-[220px] truncate">{r.findings}</td>
                          <td className="px-8 py-5">
                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${statusStyle[r.status] ?? 'bg-slate-100 text-slate-500'}`}>
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 bg-white border-t border-slate-100 shrink-0 flex items-center justify-between gap-6">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Total: <span className="text-slate-900">{inspectionReports.length} records</span> · Last updated: May 9, 2026
              </p>
              <button
                onClick={() => setSummaryOpen(false)}
                className="px-8 py-3 bg-[#0b1f5b] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#1746a2] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

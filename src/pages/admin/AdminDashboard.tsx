import { TrendingUp, FileCheck, AlertCircle, ArrowRight, Plus, ChevronRight, FileSpreadsheet } from 'lucide-react';

export default function AdminDashboard() {
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

  return (
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
                { label: 'New Report', icon: <Plus size={18} /> },
                { label: 'Generate List', icon: <FileSpreadsheet size={18} /> },
                { label: 'View Analytics', icon: <TrendingUp size={18} /> },
              ].map((action, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-all">
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
  );
}

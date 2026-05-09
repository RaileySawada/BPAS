import { Search, Filter, Download, Printer } from 'lucide-react';

export default function AdminReports() {
  const reports = [
    { id: 'BIR-2026-004', bin: 'BIN-2026-1045', name: 'JLC Printing Services', location: 'Milagrosa, Calamba City', type: 'Retirement', date: 'May 5, 2026', status: 'Approved' },
    { id: 'BIR-2026-007', bin: 'BIN-2026-1102', name: 'Tech Haven Gadgets', location: 'Poblacion, Calamba City', type: 'New', date: 'May 3, 2026', status: 'Approved' },
  ];

  return (
    <div className="space-y-6 w-full">

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">Reports Inventory</h2>
          <p className="text-slate-500 font-medium text-sm">Manage and review validated inspection records.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all text-xs">
            <Download size={16} /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0b1f5b] text-white rounded-xl font-bold hover:bg-[#1746a2] transition-all text-xs">
            <Printer size={16} /> Print All
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search by BIN, Business Name..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#1746a2] text-sm font-medium" />
        </div>
        <div className="flex items-center gap-4">
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600">
            <option>All Types</option>
            <option>New</option>
            <option>Renewal</option>
          </select>
          <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-8 py-5">ID / BIN</th>
                <th className="px-8 py-5">Business Name</th>
                <th className="px-8 py-5">Classification</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reports.map((report, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5">
                    <p className="font-bold text-slate-900">{report.id}</p>
                    <p className="text-[10px] font-bold text-slate-400">{report.bin}</p>
                  </td>
                  <td className="px-8 py-5 font-bold text-slate-700">{report.name}</td>
                  <td className="px-8 py-5">
                    <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-600 uppercase">{report.type}</span>
                  </td>
                  <td className="px-8 py-5 font-medium text-slate-600">{report.date}</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase">{report.status}</span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="text-[#1746a2] font-bold hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

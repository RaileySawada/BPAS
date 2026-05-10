import { Search, Filter, Download, ShieldCheck, Eye } from "lucide-react";

export default function InspectorPermits() {
  const permits = [
    {
      id: "2026-00001",
      name: "ABC Trading and Services",
      location: "Barangay Real",
      owner: "Juan Dela Cruz",
      issued: "Jan 15, 2026",
      expires: "Dec 31, 2026",
      status: "Active",
    },
    {
      id: "2026-00042",
      name: "Calamba Food Mart",
      location: "Sta. Rosa Road",
      owner: "Maria Clara",
      issued: "Feb 10, 2026",
      expires: "Dec 31, 2026",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Permit Masterlist
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Registry of all active business permits.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0b1f5b] text-white rounded-xl font-bold text-sm hover:bg-[#1746a2] transition-all shadow-md">
          <Download size={18} /> Download Registry
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-[300px] relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Permit No, Business Name..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#1746a2] text-sm font-medium"
          />
        </div>
        <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all">
          <Filter size={18} />
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-8 py-5">Permit Number</th>
                <th className="px-8 py-5">Establishment</th>
                <th className="px-8 py-5">Owner</th>
                <th className="px-8 py-5">Issued / Expires</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {permits.map((permit, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={18} className="text-emerald-600" />
                      <span className="font-bold text-slate-900">
                        {permit.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-bold text-slate-700">
                    {permit.name}
                  </td>
                  <td className="px-8 py-5 font-medium text-slate-600">
                    {permit.owner}
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Issued: {permit.issued}
                    </p>
                    <p className="text-[10px] font-bold text-rose-500 uppercase">
                      Expires: {permit.expires}
                    </p>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase">
                      {permit.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="p-2 text-[#1746a2] hover:bg-slate-100 rounded-lg transition-all">
                      <Eye size={18} />
                    </button>
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

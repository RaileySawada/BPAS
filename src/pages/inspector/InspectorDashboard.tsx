import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  ClipboardList,
  ChevronRight,
  Plus,
  FileText,
  ArrowRight,
  Eye,
  MoreVertical,
} from "lucide-react";

export default function InspectorDashboard() {
  const stats = [
    {
      label: "Today's Schedule",
      value: "06",
      color: "bg-blue-100 text-blue-700",
      icon: <Calendar size={24} />,
      status: "Assigned",
    },
    {
      label: "To Encode",
      value: "14",
      color: "bg-amber-100 text-amber-700",
      icon: <ClipboardList size={24} />,
      status: "Pending",
    },
    {
      label: "Transmittals",
      value: "08",
      color: "bg-emerald-100 text-emerald-700",
      icon: <CheckCircle2 size={24} />,
      status: "This week",
    },
  ];

  const dailyRoute = [
    {
      name: "Green Valley Grocery",
      time: "09:30 AM",
      location: "Brgy. Canlubang",
      status: "Next Up",
    },
    {
      name: "Mendoza Auto Parts",
      time: "11:15 AM",
      location: "Brgy. Mayapa",
      status: "Assigned",
    },
  ];

  return (
    <div className="space-y-10 w-full animate-fade-up">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 bg-[#0b1f5b] p-8 md:p-10 lg:p-14 rounded-[2.5rem] md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Business Permit Acquisition System
          </h2>
          <p className="text-slate-300 font-bold text-base md:text-lg opacity-80">
            Welcome back, <span className="text-[#f2c94c]">Maria Teresa</span>.
            Your field deployment is ready.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 relative z-10">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
            <Calendar size={18} className="text-[#f2c94c]" /> Schedule
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#f2c94c] text-[#0b1f5b] rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl hover:brightness-110 transition-all group/btn">
            <Plus
              size={20}
              strokeWidth={3}
              className="group-hover/btn:rotate-90 transition-transform duration-500"
            />{" "}
            New Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div
              className={`w-14 h-14 md:w-16 md:h-16 ${stat.color} rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-inner group-hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
            <p className="text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">
              {stat.label}
            </p>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tight">
              {stat.value}
            </h3>
            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                {stat.status}
              </span>
              <ChevronRight
                size={18}
                className="text-slate-200 group-hover:text-[#0b1f5b] transition-all"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_500px] gap-8 md:gap-10">
        {/* Today's Route - FIXING OVERFLOW */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 lg:p-14 shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 md:mb-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Today's Inspection Route
              </h3>
              <p className="text-slate-400 font-bold text-sm">
                GPS Synchronized field schedule
              </p>
            </div>
            <div className="inline-flex items-center gap-3 bg-[#1746a2]/5 text-[#1746a2] px-6 py-4 md:py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest cursor-pointer hover:bg-[#1746a2]/10 transition-all self-start sm:self-auto">
              <MapPin size={18} className="text-[#f2c94c]" />{" "}
              <span className="whitespace-now opacity-100">Open Map View</span>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 relative pl-6 sm:pl-10">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-10 top-12 bottom-12 w-[3px] bg-slate-50 rounded-full"></div>

            {dailyRoute.map((stop, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 group"
              >
                {/* Time Indicator */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl flex flex-col items-center justify-center z-10 border-[6px] border-white shadow-xl transition-all ${
                    stop.status === "Next Up"
                      ? "bg-[#0b1f5b] text-white scale-105 sm:scale-110"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <Clock
                    size={18}
                    className={
                      stop.status === "Next Up" ? "text-[#f2c94c]" : ""
                    }
                  />
                  <span className="text-[9px] font-black uppercase mt-1 leading-none">
                    {stop.time.split(" ")[1]}
                  </span>
                </div>

                {/* Info Card */}
                <div
                  className={`w-full p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 ${
                    stop.status === "Next Up"
                      ? "bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                      : "bg-white border-slate-100 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 md:mb-6">
                    <div className="space-y-1">
                      <p
                        className={`text-[10px] font-black uppercase tracking-widest ${stop.status === "Next Up" ? "text-[#f2c94c]" : "text-slate-300"}`}
                      >
                        {stop.time} Deployment
                      </p>
                      <h4 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                        {stop.name}
                      </h4>
                    </div>
                    <span
                      className={`self-start px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        stop.status === "Next Up"
                          ? "bg-[#f2c94c] text-[#0b1f5b]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {stop.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold opacity-60">
                    <MapPin
                      size={18}
                      className={
                        stop.status === "Next Up"
                          ? "text-[#f2c94c]"
                          : "text-slate-300"
                      }
                    />
                    <span className="truncate">{stop.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Panels */}
        <div className="space-y-8 md:space-y-10">
          <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 lg:p-12 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1746a2]"></div>
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                Report Preview
              </h3>
              <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="bg-slate-50/50 rounded-[2rem] p-6 md:p-8 border border-slate-100 group-hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-[#1746a2]">
                  <FileText size={28} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
                    BAN 123-11-2026-0000123
                  </h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                    Status: <span className="text-amber-600">Draft</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                    Business
                  </span>
                  <span className="text-xs md:text-sm font-black text-slate-800 text-right truncate">
                    XYZ Food Supply
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                    Category
                  </span>
                  <span className="text-xs md:text-sm font-black text-slate-800 italic text-right">
                    Essential Goods
                  </span>
                </div>
              </div>

              <div className="mt-8 md:mt-10 grid grid-cols-2 gap-4">
                <button className="py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Eye size={14} /> View
                </button>
                <button className="py-4 bg-[#0b1f5b] text-white rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-[#1746a2] transition-all flex items-center justify-center gap-2 shadow-xl">
                  Transmit <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#1746a2] rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32 blur-3xl"></div>
            <h3 className="text-2xl font-black mb-8 md:mb-10 tracking-tight leading-none">
              Field Contacts
            </h3>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  name: "Juan Dela Cruz",
                  phone: "0912-345-6789",
                  biz: "ABC Trading",
                },
                {
                  name: "Maria Clara",
                  phone: "0998-765-4321",
                  biz: "Food Mart",
                },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 bg-white/10 rounded-[1.5rem] border border-white/5 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f2c94c] text-[#0b1f5b] rounded-xl flex items-center justify-center font-black">
                      {contact.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-sm leading-none mb-1">
                        {contact.name}
                      </p>
                      <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
                        {contact.biz}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-right pl-14 sm:pl-0">
                    <p className="text-[10px] font-black text-[#f2c94c] tracking-widest">
                      {contact.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

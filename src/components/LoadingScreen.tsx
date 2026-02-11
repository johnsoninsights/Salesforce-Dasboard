export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400/30 rounded-full filter blur-3xl"></div>
      
      <div className="text-center relative z-10">
        {/* Logo with hexagon shape */}
        <div className="mb-8 flex justify-center">
          <div className="hexagon w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse-glow">
            <span className="text-white font-black text-5xl">S</span>
          </div>
        </div>
        
        {/* Loading text */}
        <h2 className="text-5xl font-black mb-3 text-slate-900">
          SalesPro
        </h2>
        <p className="text-slate-600 text-lg mb-8 font-bold">Loading your dashboard...</p>
        
        {/* Loading bar */}
        <div className="w-80 h-2 bg-slate-200 rounded-full overflow-hidden shadow-lg">
          <div className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full animate-loading-bar shadow-lg shadow-blue-500/50"></div>
        </div>
        
        {/* Pulsing dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
          <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2.5 h-2.5 bg-violet-600 rounded-full animate-pulse shadow-lg shadow-violet-500/50" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
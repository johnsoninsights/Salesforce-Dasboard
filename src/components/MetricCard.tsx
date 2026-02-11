type MetricCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
};

export default function MetricCard({ title, value, subtitle, trend, trendUp }: MetricCardProps) {
  return (
    <div className="light-card rounded-xl p-6 md:p-8 card-hover accent-bar relative overflow-hidden group h-full shadow-lg">
      {/* Top accent stripe with unique angle */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        trendUp 
          ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500' 
          : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600'
      }`}></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top section */}
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm md:text-base text-slate-600 font-black uppercase tracking-widest">
            {title}
          </p>
          {trend && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-black shadow-md uppercase tracking-wide ${
              trendUp 
                ? 'bg-emerald-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              <span className="text-sm">{trendUp ? '↑' : '↓'}</span>
              <span>{trend}</span>
            </div>
          )}
        </div>
        
        {/* Main value - using monospace font for numbers */}
        <div className="flex-1 flex flex-col items-center justify-center my-4">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-mono bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight tracking-tight">
            {value}
          </h3>
        </div>
        
        {/* Bottom section */}
        {subtitle && (
          <div className="text-center pt-4 border-t-2 border-slate-200">
            <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wide">{subtitle}</p>
          </div>
        )}
      </div>
      
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
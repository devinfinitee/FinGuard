export function FinGuardLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="24" rx="6" fill="currentColor" className="text-primary"/>
        <path d="M20 14v12M14 20h12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 16h8v8h-8z" fill="white" fillOpacity="0.2"/>
      </svg>
    </div>
  );
}

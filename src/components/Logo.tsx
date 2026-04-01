import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Shield Icon */}
      <div className="relative flex-shrink-0">
        <svg
          width={isCompact ? 32 : 38}
          height={isCompact ? 36 : 44}
          viewBox="0 0 38 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Shield shape */}
          <path
            d="M19 1L3 8v10c0 11.1 6.8 21.5 16 24 9.2-2.5 16-12.9 16-24V8L19 1z"
            fill="url(#shield-gradient)"
            stroke={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(16,185,129,0.3)'}
            strokeWidth="1.5"
          />
          {/* Inner shield highlight */}
          <path
            d="M19 4L6 9.5v8.5c0 9.5 5.8 18.4 13 20.5 7.2-2.1 13-11 13-20.5V9.5L19 4z"
            fill="url(#shield-inner)"
            opacity="0.5"
          />
          {/* Checkmark */}
          <path
            d="M13 20l4 4 8-9"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="shield-gradient" x1="3" y1="1" x2="35" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="shield-inner" x1="6" y1="4" x2="32" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      {!isCompact && (
        <div className="flex flex-col leading-tight">
          <span className={`text-[15px] font-bold tracking-tight ${isWhite ? 'text-white' : 'text-slate-900'}`}>
            Public Liability
          </span>
          <span className={`text-[13px] font-semibold tracking-wide ${isWhite ? 'text-emerald-300' : 'text-emerald-600'}`}>
            INSURANCE
            <span className={`ml-1 font-normal ${isWhite ? 'text-slate-300' : 'text-slate-500'}`}>.co.nz</span>
          </span>
        </div>
      )}
    </Link>
  );
}

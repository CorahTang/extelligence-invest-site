import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {/* SVG Logo */}
      <div className="relative">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          className="flex-shrink-0"
          fill="none"
        >
          {/* Background Circle */}
          <circle cx="20" cy="20" r="20" fill="url(#gradient1)" />
          
          {/* Inner Circle */}
          <circle cx="20" cy="20" r="16" fill="url(#gradient2)" />
          
          {/* Central Diamond */}
          <path 
            d="M20 8L28 20L20 32L12 20L20 8Z" 
            fill="url(#gradient3)"
            className="animate-pulse"
          />
          
          {/* Small connecting dots */}
          <circle cx="20" cy="12" r="2" fill="white" opacity="0.8" />
          <circle cx="28" cy="20" r="2" fill="white" opacity="0.8" />
          <circle cx="20" cy="28" r="2" fill="white" opacity="0.8" />
          <circle cx="12" cy="20" r="2" fill="white" opacity="0.8" />
          
          {/* Connecting lines */}
          <path 
            d="M20 12L28 20M28 20L20 28M20 28L12 20M12 20L20 12" 
            stroke="white" 
            strokeWidth="1" 
            opacity="0.6"
            className="animate-pulse"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E0E7FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-['Pacifico'] text-blue-600 leading-none">
            Extelligence
          </span>
          <span className="text-sm font-semibold text-gray-600 leading-none -mt-1">
            Invest
          </span>
        </div>
      )}
    </Link>
  );
} 
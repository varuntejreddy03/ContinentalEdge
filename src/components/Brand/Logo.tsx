import type { FC } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`flex items-center gap-5 group select-none ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Minimalist Architectural Symbol */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-all duration-700 group-hover:rotate-[5deg]"
        >
          {/* Structural Frame */}
          <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="1" className="text-primary/10" />

          {/* The "S" & "A" Abstract Fusion */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            d="M30 25H70C78.2843 25 85 31.7157 85 40V45C85 53.2843 78.2843 60 70 60H30C21.7157 60 15 66.7157 15 75V80C15 88.2843 21.7157 95 30 95H70"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="square"
            className="text-primary"
          />

          <motion.path
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            d="M40 40H75M25 60H60M40 80H75"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            className="text-primary/60 origin-left"
          />

          {/* Accent Dot - The "Edge" -> now "Associates" */}
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            cx="85" cy="25" r="4"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase dark:text-white leading-none">
            Sandeep
          </span>
          <span className="text-2xl md:text-3xl font-serif italic font-extralight text-primary leading-none">
            Associates.
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-primary/30"></div>
          <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-slate-500 dark:text-slate-400 whitespace-nowrap">
            Studio of Architecture
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;

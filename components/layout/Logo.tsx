import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  braceColor?: string;
  capColor?: string;
}

export default function Logo({
  className = '',
  width,
  height,
  braceColor = 'text-[#0B1A57]', // Brand Deep Blue
  capColor = '#F59E0B',         // Brand Orange
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={`${braceColor} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Curly Brace */}
      <path
        d="M26,16 H18 C12,16 10,18 10,25 V38 C10,44 6,48 2,50 C6,52 10,56 10,62 V75 C10,82 12,84 18,84 H26"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />

      {/* Right Curly Brace */}
      <path
        d="M74,16 H82 C88,16 90,18 90,25 V38 C90,44 94,48 98,50 C94,52 90,56 90,62 V75 C90,82 88,84 82,84 H74"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />

      {/* Graduation Cap - Diamond Top */}
      <path
        d="M50,36 L72,46 L50,56 L28,46 Z"
        fill={capColor}
      />

      {/* Graduation Cap - Skull Cap Base */}
      <path
        d="M40,51.5 V57.5 C40,62.5 43.5,65.5 50,65.5 C56.5,65.5 60,62.5 60,57.5 V51.5 C56.5,53.5 53.5,54.5 50,54.5 C46.5,54.5 43.5,53.5 40,51.5 Z"
        fill={capColor}
      />

      {/* Tassel Button (Small Circle on Top) */}
      <circle cx="50" cy="46" r="2" fill={capColor} />

      {/* Tassel String & Hanging Bobble */}
      <path
        d="M50,46 Q60,49.5 62,51 L62,60.5 C62,63 64.5,65 66.5,65"
        stroke={capColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

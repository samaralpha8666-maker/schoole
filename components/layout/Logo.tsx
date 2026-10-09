import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  braceColor?: string;
  capColor?: string;
}

export default function Logo({
  className = '',
  width = 60,
  height = 44,
  braceColor = 'text-[#0B1A57]',
}: LogoProps) {
  const isWhite = braceColor?.includes('white') || braceColor?.includes('#fff');
  const src = isWhite ? '/logo-white.png' : '/logo.png';

  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt="ApanaCampus Official Logo"
        width={width}
        height={height}
        className="w-full h-full object-contain drop-shadow-xs"
        priority
      />
    </div>
  );
}

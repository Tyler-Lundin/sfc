'use client';

import Image from 'next/image';
import { Fugaz_One } from 'next/font/google';

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = '', height = 50 }: LogoProps) {
  // Calculate width based on the SVG's aspect ratio (128.94/146.26 ≈ 0.88)
  const width = Math.round(height * 0.88);

  return (
    <div className={`relative ${className} flex items-center gap-3`}>
      <div className="relative">
        <Image
          src="/images/logo.svg"
          alt="Suncrest Fitness Center"
          width={width}
          height={height}
          priority
          className="object-contain dark:invert"
        />
      </div>
      <div className="hidden md:block leading-none">
        <span className={`${fugazOne.className} text-3xl font-bold tracking-tight block -mb-1 text-black dark:text-white`}>Suncrest</span>
        <span className="text-sm font-medium tracking-wider text-gray-600 dark:text-gray-400 block">FITNESS CENTER</span>
      </div>
    </div>
  );
} 
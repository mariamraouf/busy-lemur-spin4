import React from 'react';
import { cn } from '@/lib/utils';

interface Partner {
  name: string;
  logo: string;
}

interface MovingPartnersBarProps {
  partners: Partner[];
  barCount?: number; // Number of scrolling bars (e.g., 3 for a '3-way bar')
  logoHeightClass?: string; // Tailwind class for logo height (e.g., 'max-h-12')
  baseDurationSeconds?: number; // Base animation duration in seconds
}

const MovingPartnersBar: React.FC<MovingPartnersBarProps> = ({
  partners,
  barCount = 3,
  logoHeightClass = "max-h-12", // Default smaller size for logos
  baseDurationSeconds = 40, // Default animation speed
}) => {
  // Duplicate partners once to create a seamless loop for the animation
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden py-4">
      {Array.from({ length: barCount }).map((_, barIndex) => (
        <div
          key={barIndex}
          className="flex whitespace-nowrap"
          // Apply animation directly using style for dynamic duration and delay
          style={{
            animation: `scroll ${baseDurationSeconds + barIndex * 5}s linear infinite`,
            animationDelay: `-${barIndex * (baseDurationSeconds / barCount)}s`, // Stagger start times for each bar
            width: 'max-content', // Ensure all logos stay on one line
          } as React.CSSProperties} // Type assertion for custom CSS properties
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`${barIndex}-${index}`} className="flex-shrink-0 flex items-center justify-center px-8">
              <img
                src={partner.logo}
                alt={partner.name}
                className={cn(logoHeightClass, "w-auto object-contain")}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovingPartnersBar;
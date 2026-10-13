import React, { useRef, useState } from 'react';

interface SpotlightBlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const SpotlightBlurCard: React.FC<SpotlightBlurCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(182, 154, 112, 0.16)', // Matte gold glow
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* 21st.dev / cult.ui Cursor-Tracking Blur Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle outer blur glow bloom on hover */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#B69A70]/20 via-[#D8B8AC]/15 to-[#E8D8C5]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
        aria-hidden="true"
      />

      {children}
    </div>
  );
};

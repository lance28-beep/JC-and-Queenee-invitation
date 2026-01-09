import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Elegant layered background with depth */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F3D1C8_0%,#FAB1AA_25%,#F3D1C8_50%,#FAB1AA_75%,#F3D1C8_100%)]" />
        
        {/* Radial overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#F3D1C8_0%,transparent_50%)] opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#FAB1AA_0%,transparent_50%)] opacity-50 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#F3D1C8_0%,transparent_60%)] opacity-40 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]" />
        
        {/* Soft blur for dreamy effect */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#F3D1C8]/40 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-[#FAB1AA]/30 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />

      <div className="relative flex flex-col items-center justify-center px-4 sm:px-8">
        {/* Main content container with elegant frame */}
        <div className="relative">
          {/* Elegant glow effects - responsive sizing */}
          <div className="absolute -inset-12 sm:-inset-20 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute -inset-10 sm:-inset-16 bg-gradient-radial from-[#F3D1C8]/20 via-[#F3D1C8]/5 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          
          <div className="relative flex items-center justify-center">
            {/* Sophisticated decorative rings with staggered animations - responsive sizing */}
            <div className="absolute w-40 sm:w-56 h-40 sm:h-56 rounded-full border border-white/10 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-36 sm:w-48 h-36 sm:h-48 rounded-full border border-[#F4F4F4]/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-32 sm:w-44 h-32 sm:h-44 rounded-full border-2 border-[#F3D1C8]/30 animate-[spin_15s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 rounded-full" />
            </div>
            <div className="absolute w-28 sm:w-40 h-28 sm:h-40 rounded-full border-t-2 border-b-2 border-[#FAB1AA]/40 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="hidden sm:block absolute w-36 h-36 rounded-full border border-dashed border-white/15 animate-[spin_25s_linear_infinite]" />

            {/* Inner glow */}
            <div className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white/10 blur-2xl" />

            {/* Monogram Logo - Elegant presentation - responsive sizing */}
            <div className="relative flex flex-col items-center justify-center z-10">
              {/* Logo with sophisticated shadow */}
              <div className="relative w-28 sm:w-40 h-28 sm:h-40 brightness-0 invert">
                <div className="absolute inset-0 blur-xl bg-white/30" />
                <Image
                  src="/monogram/mongoram.png"
                  alt="JC & Queenee Monogram"
                  fill
                  className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content section with refined typography - responsive */}
        <div className="text-center max-w-sm sm:max-w-2xl px-4 sm:px-6 mt-12 sm:mt-20">
          {/* Poetic message - responsive text sizing */}
          <p
            className="text-xs sm:text-sm leading-relaxed sm:leading-loose tracking-wide text-white/90 mb-4 sm:mb-6"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 300 }}
          >
            Please Wait A Moment While We Set The Scene,
            <br />
            <span className="text-white/80 text-[10px] sm:text-xs">Tune The Music, And Open The Doors To Celebrate</span>
            <br />
            <span className="text-white/95 text-sm sm:text-base font-normal">Love, Life, And Forever.</span>
          </p>

          {/* Loading text - responsive */}
          <p
            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/95 mb-2 sm:mb-3 animate-pulse"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 600, animationDuration: '2s' }}
          >
            Loading Invitation
          </p>

          {/* Couple names - responsive */}
          <p
            className="text-base sm:text-xl tracking-[0.12em] sm:tracking-[0.15em] text-white/90 mb-4 sm:mb-6"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 400 }}
          >
            JC & Queenee
          </p>

          {/* Elegant progress bar - responsive */}
          <div className="relative w-48 sm:w-64 h-px mx-auto bg-white/20 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#F3D1C8] via-[#FAB1AA] to-[#F3D1C8] transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(243,209,200,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress percentage - responsive */}
          <p
            className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/50 mt-2 sm:mt-3"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 300 }}
          >
            {progress}%
          </p>
        </div>
      </div>

      {/* Elegant fade overlay for transition */}
      <div className={`absolute inset-0 bg-white transition-opacity duration-700 pointer-events-none ${fadeOut ? 'opacity-10' : 'opacity-0'}`} />
    </div>
  );
};
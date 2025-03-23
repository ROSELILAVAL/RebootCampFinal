
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type RobotExpression = 'default' | 'happy' | 'curious' | 'excited';

type RobotMascotProps = {
  className?: string;
  initialExpression?: RobotExpression;
  isBouncing?: boolean;
};

const colorPalette = {
  head: 'bg-gradient-to-br from-white to-blue-50',
  eyes: 'bg-gradient-to-r from-reboot-blue to-blue-500',
  antenna: 'bg-gradient-to-r from-reboot-yellow to-yellow-400',
  antennaTop: 'bg-gradient-to-r from-reboot-coral to-pink-400', 
  mouth: 'bg-gradient-to-r from-reboot-dark to-gray-700'
};

const RobotMascot: React.FC<RobotMascotProps> = ({ 
  className,
  initialExpression = 'default' ,
  isBouncing = true
}) => {
  const [expression, setExpression] = useState<RobotExpression>(initialExpression);
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [bounce, setBounce] = useState(false);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + Math.random() * 2000); // Random blinking interval
    
    return () => clearInterval(blinkInterval);
  }, []);

  // Bouncing animation
  useEffect(() => {
    if(isBouncing){
      const bounceInterval = setInterval(() => {
        setBounce(true);
        setTimeout(() => setBounce(false), 500);
      }, 4000); // Regular bounce interval
      
      return () => clearInterval(bounceInterval);
    }
  }, []);

  // Change expression periodically
  useEffect(() => {
    const expressionInterval = setInterval(() => {
      const expressions: RobotExpression[] = ['default', 'curious', 'happy', 'excited'];
      const randomIndex = Math.floor(Math.random() * expressions.length);
      setExpression(expressions[randomIndex]);
    }, 5000); // Change expression every 5 seconds
    
    return () => clearInterval(expressionInterval);
  }, []);

  const getEyesStyle = () => {
    if (isBlinking) {
      return 'h-0.5 rounded-full transition-all duration-100';
    }
    
    switch (expression) {
      case 'happy':
        return 'rounded-b-xl scale-110';
      case 'curious':
        return 'rounded-full scale-75 translate-y-1';
      case 'excited':
        return 'rounded-full scale-110 -translate-y-1';
      default:
        return 'rounded-full';
    }
  };

  const getMouthStyle = () => {
    switch (expression) {
      case 'happy':
        return 'w-8 h-4 rounded-b-xl';
      case 'curious':
        return 'w-4 h-4 rounded-full';
      case 'excited':
        return 'w-10 h-5 rounded-b-xl';
      default:
        return 'w-6 h-1.5 rounded-full';
    }
  };

  return (
    <div 
      className={cn(
        "relative w-40 h-40 select-none",
        bounce ? "animate-bounce" : "",
        isHovered ? "animate-pulse" : "",
        className
      )}
      style={{marginTop: "40px"}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Robot head */}
      <div className={cn(
        "absolute inset-0 rounded-2xl border-4 border-reboot-yellow shadow-lg transition-all duration-300",
        colorPalette.head,
        isHovered ? "scale-105" : ""
      )}>
        {/* Antenna */}
        <div className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7 w-2 h-8 rounded-full transition-all duration-300",
          colorPalette.antenna,
          isHovered ? "h-10 -translate-y-9" : ""
        )}>
          <div className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-4 h-4 rounded-full transition-all duration-300",
            colorPalette.antennaTop,
            isHovered ? "scale-110 animate-pulse" : ""
          )} />
        </div>

        {/* Eyes */}
        <div className="absolute top-1/4 left-0 right-0 flex justify-center space-x-8">
          <div className={cn(
            "w-5 h-5 transition-all duration-300", 
            colorPalette.eyes, 
            getEyesStyle(),
            isHovered ? "scale-110" : ""
          )} />
          <div className={cn(
            "w-5 h-5 transition-all duration-300", 
            colorPalette.eyes, 
            getEyesStyle(),
            isHovered ? "scale-110" : ""
          )} />
        </div>

        {/* Cheeks - only visible when happy/excited */}
        {(expression === 'happy' || expression === 'excited' || isHovered) && (
          <div className="absolute top-1/3 left-0 right-0 flex justify-between px-4">
            <div className="w-3 h-2 bg-pink-300 rounded-full opacity-70" />
            <div className="w-3 h-2 bg-pink-300 rounded-full opacity-70" />
          </div>
        )}

        {/* Mouth */}
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 flex justify-center items-center">
          <div className={cn(
            "transition-all duration-300", 
            colorPalette.mouth,
            getMouthStyle(),
            isHovered ? "scale-110" : ""
          )} />
        </div>
      </div>
      
      {/* Sparkles - only visible on hover */}
      {isHovered && (
        <>
          <div className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-pulse">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -left-4 w-6 h-6 text-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" fill="currentColor" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default RobotMascot;

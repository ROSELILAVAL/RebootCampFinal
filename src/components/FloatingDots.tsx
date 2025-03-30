
// Floating Dots Background Component
export const FloatingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => {
        const size = 4 + Math.random() * 4;
        const animationDuration = 15 + Math.random() * 20;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * -30;
        // const opacity = 0.3 + Math.random() * 0.7;
        const color = [
          'bg-blue-400', 'bg-purple-400', 'bg-green-400', 
          'bg-yellow-400', 'bg-pink-400', 'bg-indigo-400'
        ][Math.floor(Math.random() * 6)];
        
        return (
          <div 
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-${size}px`,
              // opacity: opacity,
              animation: `float ${animationDuration}s infinite linear`,
              animationDelay: `${animationDelay}s`
            }}
          />
        );
      })}
    </div>
  );
};
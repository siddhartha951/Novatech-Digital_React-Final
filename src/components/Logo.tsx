import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { container: 32, text: "text-lg" },
  md: { container: 48, text: "text-2xl" },
  lg: { container: 64, text: "text-4xl" },
};

export const Logo = ({ size = "md", animated = true, className = "" }: LogoProps) => {
  const { container, text } = sizeMap[size];
  
  const LogoContent = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* N Monogram with Glow */}
      <div 
        className="relative flex items-center justify-center rounded-xl"
        style={{ width: container, height: container }}
      >
        {/* Glow Background */}
        <div 
          className="absolute inset-0 rounded-xl opacity-60 blur-lg"
          style={{
            background: "linear-gradient(135deg, hsl(243 75% 59%), hsl(270 70% 55%), hsl(187 85% 53%))",
          }}
        />
        
        {/* Main Background */}
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: "linear-gradient(135deg, hsl(243 75% 59%), hsl(270 70% 55%))",
          }}
        />
        
        {/* N Letter */}
        <span 
          className={`relative z-10 font-bold text-white ${text}`}
          style={{ 
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          N
        </span>

        {/* Corner Accent */}
        <div 
          className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full"
          style={{
            background: "hsl(187 85% 53%)",
            boxShadow: "0 0 10px hsl(187 85% 53%)",
          }}
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span 
          className="font-bold text-foreground tracking-tight leading-none"
          style={{ fontSize: container * 0.4 }}
        >
          Novatech
        </span>
        <span 
          className="text-muted-foreground font-medium tracking-widest uppercase"
          style={{ fontSize: container * 0.2 }}
        >
          Digital
        </span>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        {LogoContent}
      </motion.div>
    );
  }

  return LogoContent;
};

export default Logo;

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  glowing?: boolean;
}

export const GradientButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  glowing = false,
  ...props
}: GradientButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary via-novatech-purple to-primary bg-[length:200%_100%] text-white",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        backgroundPosition: "100% 0",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        backgroundPosition: { duration: 0.5 }
      }}
      className={cn(
        "relative overflow-hidden rounded-xl font-semibold transition-all duration-300",
        sizeClasses[size],
        variantClasses[variant],
        glowing && "shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
        className
      )}
      {...props}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{ translateX: ["100%", "-100%"] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatDelay: 2,
          ease: "linear" 
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ 
  children, 
  className = "", 
  hover = true,
  glow = false 
}: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -8,
        scale: 1.02,
      } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl backdrop-blur-xl border overflow-hidden",
        "bg-card/50 border-border/50",
        hover && "cursor-pointer",
        glow && "shadow-lg shadow-primary/10",
        className
      )}
    >
      {/* Gradient Border Overlay */}
      <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(243 75% 59% / 0.3), hsl(270 70% 55% / 0.3), hsl(187 85% 53% / 0.3))",
          }}
        />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn(alignClasses[align], className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4",
            "bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default GradientButton;

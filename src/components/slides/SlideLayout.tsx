import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => (
  <div className={`w-[1920px] h-[1080px] bg-slide relative overflow-hidden font-display ${className}`}>
    {children}
  </div>
);

export const SlideTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`text-[56px] font-bold leading-tight tracking-tight ${className}`}
  >
    {children}
  </motion.h1>
);

export const SlideSubtitle = ({ children, delay = 0.2, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`text-[28px] font-body leading-relaxed text-muted-foreground ${className}`}
  >
    {children}
  </motion.p>
);

export const FadeIn = ({ children, delay = 0, className = "", y = 20 }: { children: ReactNode; delay?: number; className?: string; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const GlowDot = ({ x, y, size = 12, color = "cyan", delay = 0, pulse = true }: { x: number; y: number; size?: number; color?: "cyan" | "gold"; delay?: number; pulse?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="absolute"
    style={{ left: x, top: y }}
  >
    <div className={`rounded-full ${color === "cyan" ? "bg-cyan glow-cyan" : "bg-gold glow-gold"} ${pulse ? "animate-pulse" : ""}`}
      style={{ width: size, height: size }}
    />
    <div className={`absolute inset-0 rounded-full ${color === "cyan" ? "bg-cyan" : "bg-gold"} opacity-20 blur-md`}
      style={{ width: size * 3, height: size * 3, left: -size, top: -size }}
    />
  </motion.div>
);

export const BulletList = ({ items, delay = 0.3 }: { items: string[]; delay?: number }) => (
  <div className="space-y-5">
    {items.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + i * 0.1 }}
        className="flex items-start gap-4"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-primary mt-3 shrink-0" />
        <span className="text-[26px] font-body text-secondary-foreground leading-relaxed">{item}</span>
      </motion.div>
    ))}
  </div>
);

export const KeyLine = ({ children, delay = 0.8 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    className="border-l-4 border-primary pl-6 py-2 mt-8"
  >
    <p className="text-[28px] font-display font-medium text-cyan-glow text-glow-cyan leading-relaxed">
      {children}
    </p>
  </motion.div>
);

export const SlideNumber = ({ current, total }: { current: number; total: number }) => (
  <div className="absolute bottom-8 right-12 text-[18px] font-mono text-muted-foreground opacity-50">
    {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

export const CardBlock = ({ title, text, delay = 0, icon }: { title: string; text: string; delay?: number; icon?: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-slide-surface border border-border rounded-xl p-8 flex-1"
  >
    {icon && <div className="mb-4 text-primary">{icon}</div>}
    <h3 className="text-[24px] font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-[20px] font-body text-muted-foreground leading-relaxed">{text}</p>
  </motion.div>
);

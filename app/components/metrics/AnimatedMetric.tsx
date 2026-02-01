"use client";

import { useCountUp } from "@/app/hooks/useCountUp";

type AnimatedMetricProps = {
  label: string;
  value: number;
  format: (value: number) => string;
  animate?: boolean;
  duration?: number;
};

export function AnimatedMetric({
  label,
  value,
  format,
  animate = true,
  duration = 800,
}: AnimatedMetricProps) {
  const animatedValue = useCountUp(value, duration);

  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="text-white/60 text-xs md:text-sm">{label}</span>
      <span className="text-white text-2xl md:text-lg font-semibold">
        {format(animate ? animatedValue : value)}
      </span>
    </div>
  );
}

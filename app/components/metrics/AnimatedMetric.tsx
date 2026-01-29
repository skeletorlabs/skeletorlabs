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
  const animatedValue = useCountUp(animate ? value : value, duration);

  return (
    <div className="flex flex-col">
      <span className="text-white/60 text-sm">{label}</span>
      <span className="text-white text-lg font-semibold">
        {format(animate ? animatedValue : value)}
      </span>
    </div>
  );
}

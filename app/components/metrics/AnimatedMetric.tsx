"use client";

import { useCountUp } from "@/app/hooks/useCountUp";
import LabelWithTooltip from "../ui/labelWithTooltip";

type AnimatedMetricProps = {
  label: string;
  value: number;
  format: (value: number) => string;
  animate?: boolean;
  duration?: number;
  tooltip?: string;
};

export function AnimatedMetric({
  label,
  value,
  format,
  animate = true,
  duration = 800,
  tooltip,
}: AnimatedMetricProps) {
  const animatedValue = useCountUp(value, duration);

  return (
    <div className="flex flex-col items-center md:items-start">
      {tooltip && tooltip !== "" ? (
        <LabelWithTooltip tooltip={tooltip}>{label}</LabelWithTooltip>
      ) : (
        <span className="text-white/60 text-xs md:text-sm">{label}</span>
      )}
      <span className="text-white text-2xl md:text-lg font-semibold">
        {format(animate ? animatedValue : value)}
      </span>
    </div>
  );
}

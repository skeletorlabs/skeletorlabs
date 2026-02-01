export function formatRelativeTime(date?: string | Date | null): string {
  if (!date) return "just now";

  const time = new Date(date).getTime();
  if (isNaN(time)) return "just now";

  const diffMs = Date.now() - time;
  const seconds = Math.floor(diffMs / 1000);

  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  return `${Math.floor(seconds / 3600)}h ago`;
}

type Props = {
  updatedAt: string;
  cached: boolean;
};

export function ResponseMeta({ updatedAt, cached }: Props) {
  const date = new Date(updatedAt);

  return (
    <div className="flex items-center gap-2 text-xs text-neutral-500">
      <span>Updated {date.toLocaleString()}</span>

      {cached && <span className="text-yellow-400">• cached</span>}
    </div>
  );
}

interface AutoScrollProps {
  items: JSX.Element[];
  rows?: 1 | 2;
  slow?: boolean;
}

export default function AutoScroll({
  items,
  rows = 1,
  slow = false,
}: AutoScrollProps) {
  const half = Math.ceil(items.length / 2);
  const row1 = rows === 2 ? items.slice(0, half) : items;
  const row2 = rows === 2 ? items.slice(half) : [];

  const renderRow = (
    rowItems: JSX.Element[],
    keyPrefix: string,
    reverse = false
  ) => {
    const duplicatedItems = [...rowItems, ...rowItems]; // avoid DOM duplication

    return (
      <div
        className="
          w-full overflow-hidden group 
          [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-200px),transparent_100%)]
          lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      >
        <ul
          className={`flex w-max items-center justify-start [&_li]:mx-8 [&_img]:max-w-none ${
            reverse
              ? "animate-infinite-scroll-reverse"
              : slow
                ? "animate-infinite-scroll-slow"
                : "animate-infinite-scroll"
          } group-hover:[animation-play-state:paused]`}
        >
          {duplicatedItems.map((item, index) => (
            <li key={`${keyPrefix}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {renderRow(row1, "row1", false)}
      {rows === 2 && renderRow(row2, "row2", true)}
    </div>
  );
}

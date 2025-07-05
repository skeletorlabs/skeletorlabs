import classNames from "classnames";

interface Badge {
  text: string;
  big?: boolean;
  invert?: boolean;
}
export default function Badge({ text, big, invert }: Badge) {
  return (
    <span
      className={classNames({
        "flex items-center justify-center text-center rounded-full": true,
        "py-[1px] px-2": !big,
        "py-1 px-3 text-sm": big,
        "bg-indigo-600 text-violet-200": !invert,
        "bg-white text-black": !invert,
      })}
    >
      {text}
    </span>
  );
}

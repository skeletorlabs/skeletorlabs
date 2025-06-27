import classNames from "classnames";

interface Badge {
  text: string;
  big?: boolean;
}
export default function Badge({ text, big }: Badge) {
  return (
    <span
      className={classNames({
        "flex items-center justify-center text-center bg-indigo-600 text-violet-200 rounded-full":
          true,
        "py-[1px] px-2": !big,
        "py-1 px-3 text-sm": big,
      })}
    >
      {text}
    </span>
  );
}

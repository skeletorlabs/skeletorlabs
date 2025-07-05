import classNames from "classnames";

interface Badge {
  text: string;
  big?: boolean;
  bgColor?: string;
  textColor?: string;
}
export default function Badge({ text, big, bgColor, textColor }: Badge) {
  return (
    <span
      className={classNames({
        "flex items-center justify-center text-center text-violet-200 rounded-full": true,
        "py-[1px] px-2": !big,
        "py-1 px-3 text-sm": big,
        "bg-indigo-600": !bgColor,
        [`${bgColor}`]: bgColor,
        "text-violet-200": !textColor,
        [`${textColor}`]: textColor,
      })}
    >
      {text}
    </span>
  );
}

interface Badge {
  key: number;
  text: string;
}
export default function Badge({ text }: Badge) {
  return (
    <span className="flex items-center justify-center text-center bg-indigo-600 rounded-lg py-[1px] px-2">
      {text}
    </span>
  );
}

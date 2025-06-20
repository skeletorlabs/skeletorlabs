import { useCallback, useEffect, useRef, useState } from "react";
import { ReactTerminal } from "react-terminal";

export default function Terminal() {
  const terminalRef = useRef<any>(null);
  const [welcomeLines, setWelcomeLines] = useState<JSX.Element[]>([]);
  const [prompt, setPrompt] = useState("");
  const [barColor, setBarColor] = useState("");
  const [commands] = useState<any>({
    whoami: () => "stranger",
    whoismaster: () => "skeletor",
    sudo: () => "permission denied",
    cd: (directory: string) => `changed path to ${directory}`,
    forge: (args: string) => {
      if (args === "test Vesting") {
        return [
          <div key="line1">
            Running 1 test for test/Vesting.t.sol:VestingTest
          </div>,
          <div key="line2">
            <span style={{ color: "#4CAF50" }}>[PASS]</span> testVesting() (gas:
            50231)
          </div>,
          <div key="line3" />,
          <div key="line4">
            Suite result: ok. <span style={{ color: "#4CAF50" }}>1 passed</span>
            ; <span style={{ color: "#F44336" }}>0 failed</span>;{" "}
            <span style={{ color: "#FFEB3B" }}>0 skipped</span>; finished in
            3.83s (19.84ms CPU time)
          </div>,

          <div
            key="line5"
            className="flex flex-col text-xs text-white/80 py-4  leading-normal my-5"
          >
            <code className="my-2 text-white">--help:</code>
            <code>- whoami</code>
            <code>- whoismaster</code>
            <code>- sudo</code>
            <code>- cd </code>
            <code>- clear</code>
          </div>,
        ];
      }
      return [<div key="unknown">Unknown forge command: {args}</div>];
    },
  });

  const simulate = useCallback(async () => {
    const cmd = "forge test Vesting";
    const lines: JSX.Element[] = [];
    let typed = "";

    for (let i = 0; i < cmd.length; i++) {
      typed += cmd[i];
      lines[0] = <div key="typing">{typed}</div>;
      setWelcomeLines([...lines]);
      await new Promise((r) => setTimeout(r, 80));
    }

    await new Promise((r) => setTimeout(r, 400));
    const resultLines = commands.forge("test Vesting") as JSX.Element[];
    setWelcomeLines([<div key="cmd">{cmd}</div>, ...resultLines]);

    setPrompt("@Skeletor:~/Developer/Foo|main⚡ =>");
    setBarColor("white");
  }, [commands, setBarColor, setWelcomeLines, setPrompt]);

  const renderTerminal = useCallback(() => {
    return (
      <ReactTerminal
        commands={commands}
        welcomeMessage={welcomeLines}
        prompt={prompt}
        themes={{
          "skeletor-theme": {
            themeBGColor: "#111",
            themeToolbarColor: "#222",
            themeColor: "white",
            themePromptColor: "#BFAFFF",
          },
        }}
        theme="skeletor-theme"
        forwardRef={terminalRef}
      />
    );
  }, []);

  useEffect(() => {
    renderTerminal();

    setTimeout(() => {
      simulate();
    }, 1000);
  }, []);

  return (
    <div className="my-terminal-wrapper px-14">
      <ReactTerminal
        commands={commands}
        welcomeMessage={welcomeLines}
        prompt={prompt}
        themes={{
          "skeletor-theme": {
            themeBGColor: "#111",
            themeToolbarColor: "#222",
            themeColor: barColor,
            themePromptColor: "#BFAFFF",
          },
        }}
        theme="skeletor-theme"
      />
    </div>
  );
}

"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactTerminal } from "react-terminal";

export default function Terminal() {
  const terminalRef = useRef<any>(null);
  const [welcomeLines, setWelcomeLines] = useState<JSX.Element[]>([]);
  const [prompt, setPrompt] = useState("");
  const [barColor, setBarColor] = useState("");
  const [commands] = useState<any>({
    whoami: () => "Stranger",
    whoismaster: () => "Skeletor Labs",
    sudo: () => "Permission Denied",
    help: () => "Call Skeletor Labs!",
    forge: (args: string) => {
      if (args === "test Vesting") {
        return [
          <div key="line1" className="mt-5">
            Ran 11 tests for
            test/unit/Vesting/VestingLinear.t.sol:VestingLinearTest
          </div>,
          <div key="line2">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_CanAskForRefund() (gas: 559227)
          </div>,
          <div key="line3">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_CanCheckTGEBalance() (gas: 25314)
          </div>,
          <div key="line4">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_CanClaimAllVestedTokens() (gas: 2727953)
          </div>,
          <div key="line5">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_CanClaimTGE() (gas: 551645)
          </div>,
          <div key="line6">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_CanClaimTGEPlusLinearVestedInPeriod() (gas: 701433)
          </div>,
          <div key="line7">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_CanEmergencyWithdraw() (gas: 415762)
          </div>,
          <div key="line8">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_MustReturnZeroWhenWalletHasNoAllocation() (gas: 23761)
          </div>,
          <div key="line9">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_RevertAskRefundWhenClaimedTGE() (gas: 556945)
          </div>,
          <div key="line10">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_RevertEmergencyWithdrawByWalletWhenVesingIsOngoing()
            (gas: 431196)
          </div>,
          <div key="line11">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_RevertFillIDOTokenTwice() (gas: 529429)
          </div>,
          <div key="line12">
            <span style={{ color: "#4CAF50" }}>[PASS]</span>{" "}
            testLinear_RevertRefundPeriod() (gas: 28040)
          </div>,
          <div key="line13" />,
          <div key="line14">
            Suite result: ok.{" "}
            <span style={{ color: "#4CAF50" }}>11 passed</span>;{" "}
            <span style={{ color: "#F44336" }}>0 failed</span>;{" "}
            <span style={{ color: "#FFEB3B" }}>0 skipped</span>; finished in
            3.84s (34.03ms CPU time)
          </div>,

          <div
            key="line15"
            className="flex flex-col text-white/80 py-3 leading-normal"
          >
            <code className="my-2 text-white/60">{"=> tips to try:"}</code>
            <code>- whoami</code>
            <code>- whoismaster</code>
            <code>- sudo</code>
            <code>- help</code>
            <code>- clear</code>
          </div>,
        ];
      }
      return [<div key="unknown">Unknown forge command: {args}</div>];
    },
  });

  const simulate = useCallback(async () => {
    const cmd = "@SkeletorLabs:~/Developer/Foo|main⚡ => forge test Vesting";
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

    setPrompt("@SkeletorLabs:~/Developer/Foo|main⚡ =>");
    setBarColor("white");
  }, [commands, setBarColor, setWelcomeLines, setPrompt]);

  useEffect(() => {
    setTimeout(() => {
      simulate();
    }, 1000);
  }, [simulate]);

  return (
    <div className="my-terminal-wrapper px-6 xl:px-12 pt-10 sm:py-10 w-full min-h-[655px] md:min-h-[688px]">
      <ReactTerminal
        commands={commands}
        welcomeMessage={welcomeLines}
        prompt={prompt}
        themes={{
          "skeletor-theme": {
            themeBGColor: "#000",
            themeToolbarColor: "#000",
            themeColor: barColor,
            themePromptColor: "#BFAFFF",
          },
        }}
        theme="skeletor-theme"
        forwardRef={terminalRef}
        showControlBar={false}
      />
    </div>
  );
}

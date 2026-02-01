import Subtitle from "../subtitle";

export default function About() {
  const left: string[] = [
    "From the depths of protocol design and low-level execution, we partner with builders, founders, and DAOs to architect scalable, trustless systems across modern blockchains.",
    "We specialize in infrastructure — not just shipping interfaces, but engineering the mechanics that keep decentralized products alive under real-world pressure.",
  ];

  const right: { title: string; description: string }[] = [
    {
      title: "PROTOCOL-FIRST",
      description:
        "Smart contracts, execution paths, and invariants come before UX decisions.",
    },
    {
      title: "INFRASTRUCTURE-DRIVEN",
      description:
        "Systems designed for scale, failure tolerance, and long-term operation.",
    },
    {
      title: "SECURITY AS DEFAULT",
      description:
        "Defensive patterns, explicit threat models, and production-grade auditing.",
    },
    {
      title: "NO HYPE, JUST ENGINEERING",
      description:
        "We ship what survives real usage — not what looks good in demos.",
    },
  ];

  return (
    <div
      id="about"
      className="relative flex flex-col px-4 xl:px-14 py-24 gap-10 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute top-0 left-0 w-full h-full bg-space opacity-20" />

      {/* Ambient gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 animate-pulse-slow">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl top-[-120px] left-[-220px]" />
        <div className="absolute w-[420px] h-[420px] bg-indigo-400/30 rounded-full blur-2xl bottom-[-140px] right-[-180px]" />
      </div>

      <Subtitle
        text="About Skeletor Labs"
        description="Meet the sorcery — we build the unbuildable."
      />

      {/* Main card */}
      <div className="relative z-10 mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 md:p-16 shadow-2xl">
          {/* Card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start">
            {/* LEFT — Narrative */}
            <div className="text-center md:text-left max-w-3xl">
              <p className="mb-8 text-white/90 text-xl md:text-2xl font-semibold leading-relaxed">
                <span className="text-violet-400 font-bold">Skeletor Labs</span>{" "}
                is a Web3-native dev collective crafting smart contracts, dApps,
                and decentralized systems with precision and intent.
              </p>

              {left.map((item) => (
                <p
                  key={item}
                  className="mb-6 text-white/80 text-lg leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* RIGHT — Engineering pillars */}
            <div className="space-y-10 text-center md:text-left">
              {right.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-6"
                >
                  <p className="text-violet-400 font-semibold tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

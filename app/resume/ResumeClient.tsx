"use client";

export default function Resume() {
  return (
    <div className="flex flex-col print:bg-white w-full">
      <div className="w-full flex flex-col items-center justify-center bg-slate-400/30 py-16 print:bg-white print:py-0">
        <article className="w-full max-w-[900px] bg-white print:bg-white text-slate-900 px-12 py-14 shadow-xl print:shadow-none print:px-8 print:py-10 relative">
          <button
            onClick={() => window.print()}
            className="text-xs bg-slate-200 px-3 py-2 rounded text-slate-600 hover:text-slate-900 transition print:hidden absolute right-8 top-8"
          >
            Download PDF
          </button>
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl font-semibold tracking-tight">
              Lucas Silveira <span className="text-slate-400">CV</span>
            </h1>

            <p className="text-slate-600 mt-1">Blockchain Engineer</p>

            <p className="text-slate-500 text-sm">Founder · Skeletor Labs</p>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Summary
            </h2>
            <p className="leading-relaxed text-slate-700">
              I'm a blockchain engineer and founder with 15+ years of software
              development experience, currently leading Skeletor Labs — a Web3
              engineering studio building production-grade smart contracts and
              infrastructure across EVM and Base.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              I specialize in designing, shipping, and maintaining secure
              on-chain systems, often working closely with founders and product
              teams to turn early-stage ideas into reliable production systems.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">
              Experience
            </h2>

            <div className="space-y-10">
              {/* Trac Systems */}
              <div>
                <h3 className="font-semibold">Trac Systems</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Blockchain Engineer / Wallet & Protocol Engineer · Aug 2025 –
                  Present
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Developed core wallet features for React Native mobile and
                    browser extension, ensuring consistent behavior and secure
                    signing flows.
                  </li>
                  <li>
                    Implemented Ledger hardware wallet integration
                    (mobile-first), handling BLE communication, device
                    lifecycle, and multi-input signing.
                  </li>
                  <li>
                    Designed and debugged Bitcoin PSBT transaction flows,
                    covering UTXO selection, fee calculation, change outputs,
                    and edge cases where balance is fully consumed.
                  </li>
                  <li>
                    Supported Taproot (P2TR), Native SegWit, and Nested SegWit,
                    including safe account handling when switching derivation
                    paths.
                  </li>
                  <li>
                    Contributed to the project's blockchain layer, implementing
                    and maintaining RPC endpoints and wallet-facing APIs.
                  </li>
                  <li>
                    Researched Bitcoin signing constraints, including ECDSA vs
                    message signing, BIP-322, and Ledger signMessage
                    limitations.
                  </li>
                  <li>
                    Worked closely with protocol, hardware, and UX constraints,
                    frequently addressing complex edge cases without standard
                    solutions.
                  </li>
                </ul>
              </div>

              {/* Skeletor Labs */}
              <div>
                <h3 className="font-semibold">Skeletor Labs</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Founder & Lead Blockchain Engineer · Jul 2025 – Present
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Leading a Web3 engineering studio partnering with startups
                    and protocols to design, build, and ship secure smart
                    contracts and blockchain infrastructure.
                  </li>
                  <li>
                    Defined smart contract architecture and security patterns
                    for production deployments.
                  </li>
                </ul>
              </div>

              {/* Samurai Starter */}
              <div>
                <h3 className="font-semibold">Samurai Starter</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Blockchain Developer / CTO · Mar 2023 – Jul 2025
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Designed and implemented Solidity smart contracts for token
                    locking, vesting, staking, and reward distribution.
                  </li>
                  <li>
                    Built and maintained contracts using Foundry, with full test
                    coverage and on-chain validation.
                  </li>
                  <li>
                    Developed systems handling ERC-20 payments, treasury flows,
                    and user balances with security-first patterns.
                  </li>
                  <li>
                    Integrated off-chain services with on-chain logic, including
                    bots responsible for execution, settlement, and lifecycle
                    management.
                  </li>
                  <li>
                    Designed upgrade-safe architectures and added emergency
                    mechanisms for risk mitigation.
                  </li>
                  <li>
                    Built Next.js dApps interacting with contracts via
                    ethers.js, handling errors, user feedback, and edge cases.
                  </li>
                  <li>
                    Worked with IPFS-based data flows and decentralized
                    testimonial and registry systems.
                  </li>
                  <li>
                    Focused heavily on correctness, auditability, and edge-case
                    handling.
                  </li>
                </ul>
              </div>

              {/* One Ring Finance */}
              <div>
                <h3 className="font-semibold">One Ring Finance</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Blockchain Developer · Jan 2022 – Feb 2024
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Built front-end dApps and integrated Solidity-based smart
                    contracts.
                  </li>
                  <li>
                    Worked on multi-chain DeFi interfaces and reusable UI
                    architecture.
                  </li>
                  <li>
                    Acted as core Web3 engineer responsible for smart contracts,
                    vesting systems, and token distribution logic.
                  </li>
                </ul>
              </div>

              {/* Earlier Experience */}
              <div>
                <h3 className="font-semibold">Earlier Experience</h3>

                <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-3">
                  <li>
                    Ília — iOS Developer / Tech Lead · Jan 2021 – Dec 2021
                  </li>
                  <li>Blu — iOS Developer / Tech Lead · Mar 2018 – Dec 2020</li>
                  <li>
                    ADTsys Cloud Computing — Mobile & Ruby Developer / Tech Lead
                    · Feb 2015 – Mar 2018
                  </li>
                  <li>
                    IMA — Ruby Developer / Process Manager · Jul 2014 – Jan 2015
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Education
            </h2>

            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>FGV – Fundação Getulio Vargas</strong> — MBA in Project
                Management (2007–2009)
              </li>
              <li>
                <strong>UNIRP – Centro Universitário de Rio Preto</strong> —
                Bachelor's in Information Systems and Technologies (2003–2006)
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Skills
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Blockchain Consulting · Smart Contracts · Full-Stack Development ·
              Solidity · EVM · Foundry · Base · React · Next.js · Web3
              Infrastructure · DeFi · Tokenomics · IPFS · NestJS · dApps ·
              Multichain Deployment · Gas Optimization · UI/UX for Web3
            </p>
          </section>

          {/* Languages */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Languages
            </h2>

            <ul className="text-slate-700">
              <li>English — Full Professional</li>
              <li>Portuguese — Native</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Certifications
            </h2>

            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Mastering React Native — GoNative</li>
              <li>Scrum Fundamentals Certified (SFC)</li>
              <li>International Scrum Master Foundation</li>
              <li>MBA Project Management — FGV</li>
            </ul>
          </section>

          {/* Footer / Contact */}
          <footer className="pt-8 border-t text-sm text-slate-600 space-y-1">
            <p>Email: lucas.fernandes.silveira@gmail.com</p>
            <p>Location: São Paulo, Brazil</p>
            <p>LinkedIn: https://www.linkedin.com/in/lfsilveira</p>
            <p>GitHub: https://github.com/skeletorlabs</p>
            <p>Website: https://www.skeletorlabs.xyz</p>
          </footer>
        </article>
      </div>
    </div>
  );
}

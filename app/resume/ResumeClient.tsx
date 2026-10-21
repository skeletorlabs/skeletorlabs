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

            <p className="text-slate-600 mt-1">
              Software Engineer & Scrum Master | Technical Leadership, Agile
              Delivery & Crypto Infrastructure
            </p>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Summary
            </h2>
            <p className="leading-relaxed text-slate-700">
              I'm a hybrid people/process leader and engineer. I've run teams
              as a Scrum Master, Tech Lead, and CTO, planning sprints,
              coordinating cross-functional squads, and owning delivery
              outcomes, and I also build security-critical crypto systems
              hands-on.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              As CTO at Samurai Starter, I've owned both the technical
              roadmap and the team managing it: hiring and directing
              engineers, setting architecture and security standards, and
              being accountable for delivery to founders and stakeholders.
              Earlier in my career, at Ília, Blu,
              and ADTsys, I formally served as Scrum Master across mobile and
              web squads, running sprint planning, daily stand-ups, and
              retrospectives while simultaneously acting as technical lead.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              On the engineering side, at TRAC Systems I worked across the
              full stack of a self-custodial crypto ecosystem: the Main
              Settlement Bus (a peer-to-peer validator network for verifying
              and appending transactions), the crypto primitives library
              (Ed25519 signing, BIP-39 mnemonics, bech32m address encoding,
              blake3 hashing, transaction assembly), the mobile wallet (React
              Native), and the browser extension wallet (Next.js).
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              I have experience working with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-2">
              <li>
                Team leadership: sprint planning, stand-ups, retrospectives,
                delivery ownership, and stakeholder communication
              </li>
              <li>Hardware wallet integrations (Ledger)</li>
              <li>
                Bitcoin transaction flows (PSBT, Taproot, SegWit, address
                derivation)
              </li>
              <li>EVM smart contracts and protocol integrations</li>
              <li>
                P2P/distributed validator networks and self-custodial
                architectures
              </li>
              <li>Mobile and browser wallet clients (React Native, Next.js)</li>
              <li>Complex signing flows and custody-related systems</li>
            </ul>
            <p className="leading-relaxed text-slate-700 mt-3">
              I typically get involved when things are difficult, whether
              that's a team that's lost delivery predictability or a system
              with edge cases, protocol limitations, or inconsistent states
              that must remain reliable under strict guarantees.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              Stack: Solidity, TypeScript, Node.js, EVM, Bitcoin, React
              Native, Next.js, ethers.js
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              Open to roles that combine engineering and people/delivery
              management, whether that's Engineering Manager, Scrum Master,
              or Tech Lead positions where correctness and security are
              non-negotiable.
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
                  Sep 2026
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Coordinated closely with leadership and cross-functional
                    stakeholders to align mobile, browser, and protocol
                    workstreams on shared timelines.
                  </li>
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

              {/* Samurai Starter */}
              <div>
                <h3 className="font-semibold">Samurai Starter</h3>
                <p className="text-sm text-slate-500 mb-4">
                  CTO / Blockchain Developer · Mar 2023 – Jul 2025
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    As CTO, owned the technical roadmap and delivery plan,
                    directing engineering priorities and reporting progress
                    and risk directly to founders.
                  </li>
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
                  {/* Earlier Experience */}
              <div>
                <h3 className="font-semibold">Earlier Experience</h3>

                <div className="mt-3 space-y-6">
                  <div>
                    <p className="text-slate-700 font-medium">
                      Ília — Scrum Master / Tech Lead / iOS Developer · Jan
                      2021 – Dec 2021
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-1">
                      <li>
                        Acted as Scrum Master for the mobile team, facilitating
                        sprint planning, daily stand-ups, and retrospectives to
                        improve delivery predictability across teams.
                      </li>
                      <li>
                        Responsible for coordinating development efforts,
                        supporting technical decisions, and ensuring delivery
                        consistency across different products and stacks.
                      </li>
                      <li>
                        Acted as both hands-on developer and technical lead
                        across multiple teams, including one mobile team and
                        three web teams.
                      </li>
                      <li>
                        Led mobile development while contributing to broader
                        system architecture and cross-team integration.
                      </li>
                      <li>
                        Focused on building reliable applications with strong
                        emphasis on performance, usability, and
                        maintainability.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-slate-700 font-medium">
                      Blu — Scrum Master / Tech Lead / iOS Developer · Mar
                      2018 – Dec 2020
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-1">
                      <li>
                        Served as Scrum Master for the mobile squad, running
                        Agile ceremonies and removing delivery blockers
                        alongside technical leadership duties.
                      </li>
                      <li>
                        Led development of mobile applications with focus on
                        performance, reliability, and user experience.
                      </li>
                      <li>
                        This experience later supported work on mobile crypto
                        wallets and complex signing flows.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-slate-700 font-medium">
                      ADTsys Cloud Computing — Scrum Master / Tech Lead /
                      Mobile & Ruby Developer · Feb 2015 – Mar 2018
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-1">
                      <li>
                        Facilitated Scrum ceremonies (sprint planning,
                        stand-ups, retrospectives) as Scrum Master for mobile
                        and Ruby squads while also leading technical
                        execution.
                      </li>
                      <li>
                        Led mobile and Ruby development squads, balancing
                        hands-on engineering with technical leadership
                        responsibilities.
                      </li>
                    </ul>
                  </div>

                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>
                      IMA — Ruby Developer / Process Manager · Jul 2014 – Jan
                      2015
                    </li>
                  </ul>
                </div>
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
              Scrum Master · Agile Coaching · Team Leadership · Delivery
              Management · Stakeholder Communication · Blockchain Consulting ·
              Smart Contracts · Full-Stack Development · Solidity · EVM (Base) ·
              Foundry · React · React Native · Next.js · Bitcoin · Wallet
              Infrastructure · Ledger Integration · Web3 Infrastructure · DeFi ·
              Tokenomics · IPFS · NestJS · dApps · Multichain Deployment · Gas
              Optimization · UI/UX for Web3
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
              <li>International Scrum Master Foundation</li>
              <li>Scrum Fundamentals Certified (SFC)</li>
              <li>MBA Project Management — FGV</li>
              <li>Mastering React Native — GoNative</li>
            </ul>
          </section>

          {/* Footer / Contact */}
          <footer className="pt-8 border-t text-sm text-slate-600 space-y-1">
            <p>Location: São José do Rio Preto - SP, Brazil</p>
            <p>LinkedIn: https://www.linkedin.com/in/lfsilveira</p>
            <p>GitHub: https://github.com/skeletorlabs</p>
            <p>Website: https://www.skeletorlabs.xyz</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
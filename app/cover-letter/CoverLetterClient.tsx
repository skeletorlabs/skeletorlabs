"use client";

export default function CoverLetter() {
  return (
    <div className="flex flex-col w-full print:bg-white">
      <div className="w-full flex flex-col items-center justify-center bg-slate-400/30 py-16 print:bg-white print:py-0">
        <article className="w-full max-w-[900px] bg-white text-slate-900 px-12 py-14 shadow-xl print:shadow-none print:px-8 print:py-10 relative">
          <button
            onClick={() => window.print()}
            className="text-xs bg-slate-200 px-3 py-2 rounded text-slate-600 hover:text-slate-900 transition print:hidden absolute right-8 top-8"
          >
            Download PDF
          </button>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl font-semibold tracking-tight">
              Lucas Silveira{" "}
              <span className="text-slate-400">Cover Letter</span>
            </h1>

            <p className="text-slate-600 mt-1">Blockchain Engineer</p>
            <p className="text-slate-500 text-sm">Founder · Skeletor Labs</p>

            <p className="text-sm text-slate-500 mt-4">
              {new Date().toLocaleDateString("en-GB")}
            </p>
          </header>

          {/* Letter */}
          <section className="space-y-6 text-slate-700 leading-relaxed">
            <p>Dear Hiring Manager,</p>

            <p>
              I'm writing to express my interest in joining your team as a
              Blockchain Engineer.
            </p>

            <p>
              I have over 15 years of experience in software development and,
              over the past several years, I've focused deeply on blockchain and
              Web3 systems. My background combines strong engineering
              fundamentals with hands-on experience building production-grade
              smart contracts, wallets, and blockchain infrastructure across EVM
              networks.
            </p>

            <p>
              I'm currently leading Skeletor Labs, a Web3 engineering studio
              where I work closely with startups and protocols to design, build,
              and ship secure on-chain systems. Prior to that, I worked as a
              Blockchain Developer and CTO at Samurai Starter, where I designed
              and implemented Solidity smart contracts for vesting, token
              locking, staking, and reward distribution, primarily on Base.
              Through this work, I gained practical experience with multi-chain
              architectures, interoperability, and ERC standards.
            </p>

            <p>
              A significant part of my recent work has focused on wallet and
              protocol engineering. I've worked on mobile and browser wallets,
              Ledger hardware wallet integration, and Bitcoin transaction flows,
              including PSBT construction, UTXO selection, fee calculation, and
              address types such as Taproot and SegWit. This work required
              careful handling of edge cases, security considerations, and close
              alignment between protocol, hardware, and user experience
              constraints.
            </p>

            <p>
              Before specializing in blockchain, I worked extensively with
              full-stack web and mobile development, including Ruby on Rails and
              iOS. This background shaped a strong product-oriented mindset and
              a clear understanding of end-to-end system design. While my
              production experience is primarily in Solidity, I've also explored
              Move and Rust at a prototyping level and am keen to deepen my
              expertise across different blockchain ecosystems.
            </p>

            <p>
              I enjoy working in fast-paced environments, value clear
              communication, and thrive in roles that require ownership,
              initiative, and attention to detail. I'd welcome the opportunity
              to discuss how my experience could contribute to your team.
            </p>

            <p>Thank you for your time and consideration.</p>

            <p className="pt-4">
              Sincerely,
              <br />
              <strong>Lucas Silveira</strong>
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-10 border-t text-sm text-slate-600 space-y-1 mt-12">
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

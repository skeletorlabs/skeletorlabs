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

            <p className="text-slate-600 mt-1">
              Software Engineer | Crypto Infrastructure, Wallets &
              Distributed Systems
            </p>

            <p className="text-sm text-slate-500 mt-4">
              {new Date().toLocaleDateString("en-GB")}
            </p>
          </header>

          {/* Letter */}
          <section className="space-y-6 text-slate-700 leading-relaxed">
            <p>Dear Tailscale team,</p>

            <p>
              I'm interested in this role because it combines two things
              I've spent my career on: owning frontend architecture end to
              end, and reasoning carefully about authentication and
              security-sensitive flows.
            </p>

            <p>
              As CTO at Samurai Starter, I owned architecture decisions
              directly, including the React/Next.js frontend layer, working
              with real users and real funds where correctness wasn't
              optional. More recently at TRAC Systems, I worked deep in
              authentication and signing infrastructure for a self-custodial
              wallet ecosystem: Ledger hardware auth flows, session and
              device lifecycle handling, and the same class of problem
              you're describing for cross-origin auth, cookies, and CSRF,
              just expressed through cryptographic signing rather than
              session tokens. That security mindset, thinking through edge
              cases and failure modes before they become incidents, carries
              directly into how I'd approach auth infrastructure for a
              console.
            </p>

            <p>
              Where I'd be upfront about a gap: I haven't built a frontend
              platform or shared framework specifically consumed by other
              engineering teams. My architecture experience has been within
              a single product I owned, not a platform serving multiple
              product teams. I think the underlying judgment, knowing when
              to standardize versus abstract, transfers, but I want to name
              that difference clearly rather than overstate it.
            </p>

            <p>
              I'd welcome the chance to talk through how my background
              applies here.
            </p>

            <p className="pt-4">
              Best,
              <br />
              <strong>Lucas Silveira</strong>
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-10 border-t text-sm text-slate-600 space-y-1 mt-12">
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
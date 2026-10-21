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
            Baixar PDF
          </button>
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl font-semibold tracking-tight">
              Lucas Silveira <span className="text-slate-400">CV</span>
            </h1>

            <p className="text-slate-600 mt-1">
              Engenheiro de Software & Scrum Master | Liderança Técnica,
              Entrega Ágil & Infraestrutura Cripto
            </p>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Resumo
            </h2>
            <p className="leading-relaxed text-slate-700">
              Sou um profissional híbrido: lidero pessoas e processos e também
              atuo como engenheiro de software. Já liderei times como Scrum Master, Tech
              Lead e CTO, planejando sprints, coordenando squads
              multidisciplinares e sendo responsável pelos resultados de
              entrega, além de construir sistemas cripto críticos de
              segurança na prática.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              Como CTO na Samurai Starter, fui responsável tanto pelo roadmap
              técnico quanto pelo time que o executava: contratação e direção
              de engenheiros, definição de padrões de arquitetura e
              segurança, e prestação de contas de entrega para fundadores e
              stakeholders. Anteriormente na Ília, Blu e ADTsys,
              atuei formalmente como Scrum Master em squads mobile e web,
              conduzindo sprint planning, daily stand-ups e retrospectivas,
              enquanto também atuava como líder técnico.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              No lado técnico, na TRAC Systems trabalhei em toda a stack de um
              ecossistema cripto self-custodial: o Main Settlement Bus (uma
              rede de validadores peer-to-peer para verificar e registrar
              transações), a biblioteca de primitivas criptográficas
              (assinatura Ed25519, mnemônicos BIP-39, codificação de endereços
              bech32m, hashing blake3, montagem de transações), a carteira
              mobile (React Native) e a extensão de navegador (Next.js).
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              Tenho experiência trabalhando com:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-2">
              <li>
                Liderança de times: sprint planning, stand-ups,
                retrospectivas, responsabilidade por entrega e comunicação
                com stakeholders
              </li>
              <li>Integrações com hardware wallets (Ledger)</li>
              <li>
                Fluxos de transação Bitcoin (PSBT, Taproot, SegWit, derivação
                de endereços)
              </li>
              <li>Smart contracts EVM e integrações de protocolo</li>
              <li>
                Redes de validadores distribuídas/P2P e arquiteturas
                self-custodial
              </li>
              <li>
                Clientes de carteira mobile e navegador (React Native,
                Next.js)
              </li>
              <li>Fluxos complexos de assinatura e sistemas de custódia</li>
            </ul>
            <p className="leading-relaxed text-slate-700 mt-3">
              Costumo ser envolvido quando as coisas ficam difíceis, seja um
              time que perdeu previsibilidade de entrega, seja um sistema com
              edge cases, limitações de protocolo ou estados inconsistentes
              que precisam se manter confiáveis sob garantias rígidas.
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              Stack: Solidity, TypeScript, Node.js, EVM, Bitcoin, React
              Native, Next.js, ethers.js
            </p>
            <p className="leading-relaxed text-slate-700 mt-3">
              Aberto a posições que combinem engenharia e gestão de
              pessoas/entrega, seja como Engineering Manager, Scrum Master ou
              Tech Lead, em contextos onde correção e segurança não são
              negociáveis.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">
              Experiência
            </h2>

            <div className="space-y-10">
              {/* Trac Systems */}
              <div>
                <h3 className="font-semibold">Trac Systems</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Engenheiro Blockchain / Engenheiro de Carteira e Protocolo ·
                  Ago 2025 – Set 2026
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Coordenei de perto com a liderança e stakeholders
                    multidisciplinares para alinhar as frentes de mobile,
                    navegador e protocolo em cronogramas compartilhados.
                  </li>
                  <li>
                    Desenvolvi funcionalidades centrais de carteira para
                    mobile (React Native) e extensão de navegador, garantindo
                    comportamento consistente e fluxos de assinatura seguros.
                  </li>
                  <li>
                    Implementei integração com hardware wallet Ledger
                    (mobile-first), lidando com comunicação BLE, ciclo de vida
                    do dispositivo e assinatura multi-input.
                  </li>
                  <li>
                    Projetei e depurei fluxos de transação PSBT do Bitcoin,
                    cobrindo seleção de UTXO, cálculo de taxas, outputs de
                    troco e edge cases de consumo total de saldo.
                  </li>
                  <li>
                    Dei suporte a Taproot (P2TR), Native SegWit e Nested
                    SegWit, incluindo tratamento seguro de contas ao trocar
                    caminhos de derivação.
                  </li>
                  <li>
                    Contribuí para a camada blockchain do projeto,
                    implementando e mantendo endpoints RPC e APIs voltadas
                    para a carteira.
                  </li>
                  <li>
                    Pesquisei restrições de assinatura no Bitcoin, incluindo
                    ECDSA vs. message signing, BIP-322 e limitações do
                    signMessage da Ledger.
                  </li>
                  <li>
                    Trabalhei próximo de restrições de protocolo, hardware e
                    UX, frequentemente lidando com edge cases complexos sem
                    soluções padrão.
                  </li>
                </ul>
              </div>

              {/* Samurai Starter */}
              <div>
                <h3 className="font-semibold">Samurai Starter</h3>
                <p className="text-sm text-slate-500 mb-4">
                  CTO / Desenvolvedor Blockchain · Mar 2023 – Jul 2025
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Como CTO, fui responsável pelo roadmap técnico e pelo
                    plano de entrega, direcionando prioridades de engenharia e
                    reportando progresso e riscos diretamente aos fundadores.
                  </li>
                  <li>
                    Projetei e implementei smart contracts em Solidity para
                    token locking, vesting, staking e distribuição de
                    recompensas.
                  </li>
                  <li>
                    Construí e mantive contratos usando Foundry, com
                    cobertura completa de testes e validação on-chain.
                  </li>
                  <li>
                    Desenvolvi sistemas para pagamentos ERC-20, fluxos de
                    tesouraria e saldos de usuários com padrões security-first.
                  </li>
                  <li>
                    Integrei serviços off-chain com lógica on-chain, incluindo
                    bots responsáveis por execução, liquidação e gestão de
                    ciclo de vida.
                  </li>
                  <li>
                    Projetei arquiteturas upgrade-safe e adicionei mecanismos
                    de emergência para mitigação de riscos.
                  </li>
                  <li>
                    Construí dApps em Next.js integrando com contratos via
                    ethers.js, tratando erros, feedback ao usuário e edge
                    cases.
                  </li>
                  <li>
                    Trabalhei com fluxos de dados baseados em IPFS e sistemas
                    descentralizados de depoimentos e registro.
                  </li>
                  <li>
                    Foco intenso em correção, auditabilidade e tratamento de
                    edge cases.
                  </li>
                </ul>
              </div>

              {/* One Ring Finance */}
              <div>
                <h3 className="font-semibold">One Ring Finance</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Desenvolvedor Blockchain · Jan 2022 – Fev 2024
                </p>

                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    Construí dApps front-end e integrei smart contracts em
                    Solidity.
                  </li>
                  <li>
                    Trabalhei em interfaces multi-chain de DeFi e arquitetura
                    de UI reutilizável.
                  </li>
                  <li>
                    Atuei como engenheiro Web3 principal, responsável por
                    smart contracts, sistemas de vesting e lógica de
                    distribuição de tokens.
                  </li>
                </ul>
              </div>

              {/* Experiência Anterior */}
              <div>
                <h3 className="font-semibold">Experiência Anterior</h3>

                <div className="mt-3 space-y-6">
                  <div>
                    <p className="text-slate-700 font-medium">
                      Ília — Scrum Master / Tech Lead / Desenvolvedor iOS ·
                      Jan 2021 – Dez 2021
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-1">
                      <li>
                        Atuei como Scrum Master do time mobile, facilitando
                        sprint planning, daily stand-ups e retrospectivas para
                        melhorar a previsibilidade de entrega entre times.
                      </li>
                      <li>
                        Responsável por coordenar os esforços de
                        desenvolvimento, apoiar decisões técnicas e garantir
                        consistência de entrega entre diferentes produtos e
                        stacks.
                      </li>
                      <li>
                        Atuei tanto como desenvolvedor hands-on quanto líder
                        técnico em múltiplos times, incluindo um time mobile e
                        três times web.
                      </li>
                      <li>
                        Liderei o desenvolvimento mobile enquanto contribuía
                        para a arquitetura de sistema mais ampla e integração
                        entre times.
                      </li>
                      <li>
                        Foco em construir aplicações confiáveis com forte
                        ênfase em performance, usabilidade e manutenibilidade.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-slate-700 font-medium">
                      Blu — Scrum Master / Tech Lead / Desenvolvedor iOS · Mar
                      2018 – Dez 2020
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-1">
                      <li>
                        Atuei como Scrum Master do squad mobile, conduzindo
                        cerimônias ágeis e removendo bloqueios de entrega,
                        além das responsabilidades de liderança técnica.
                      </li>
                      <li>
                        Liderei o desenvolvimento de aplicações mobile com
                        foco em performance, confiabilidade e experiência do
                        usuário.
                      </li>
                      <li>
                        Essa experiência mais tarde deu suporte ao trabalho
                        com carteiras cripto mobile e fluxos complexos de
                        assinatura.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-slate-700 font-medium">
                      ADTsys Cloud Computing — Scrum Master / Tech Lead /
                      Desenvolvedor Mobile & Ruby · Fev 2015 – Mar 2018
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-1">
                      <li>
                        Facilitei cerimônias Scrum (sprint planning,
                        stand-ups, retrospectivas) como Scrum Master dos
                        squads mobile e Ruby, ao mesmo tempo em que liderava a
                        execução técnica.
                      </li>
                      <li>
                        Liderei squads de desenvolvimento mobile e Ruby,
                        equilibrando engenharia hands-on com responsabilidades
                        de liderança técnica.
                      </li>
                    </ul>
                  </div>

                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>
                      IMA — Desenvolvedor Ruby / Gerente de Processos · Jul
                      2014 – Jan 2015
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Formação
            </h2>

            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>FGV – Fundação Getulio Vargas</strong> — MBA em Gestão
                de Projetos (2007–2009)
              </li>
              <li>
                <strong>UNIRP – Centro Universitário de Rio Preto</strong> —
                Bacharelado em Sistemas e Tecnologias da Informação
                (2003–2006)
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Habilidades
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Scrum Master · Agile Coaching · Liderança de Times · Gestão de
              Entrega · Comunicação com Stakeholders · Consultoria Blockchain
              · Smart Contracts · Desenvolvimento Full-Stack · Solidity · EVM
              (Base) · Foundry · React · React Native · Next.js · Bitcoin ·
              Infraestrutura de Carteiras · Integração Ledger · Infraestrutura
              Web3 · DeFi · Tokenomics · IPFS · NestJS · dApps · Deploy
              Multichain · Otimização de Gas · UI/UX para Web3
            </p>
          </section>

          {/* Languages */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Idiomas
            </h2>

            <ul className="text-slate-700">
              <li>Inglês — Fluente</li>
              <li>Português — Nativo</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Certificações
            </h2>

            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>International Scrum Master Foundation</li>
              <li>Scrum Fundamentals Certified (SFC)</li>
              <li>MBA em Gestão de Projetos — FGV</li>
              <li>Mastering React Native — GoNative</li>
            </ul>
          </section>

          {/* Footer / Contact */}
          <footer className="pt-8 border-t text-sm text-slate-600 space-y-1">
            <p>Localização: São José do Rio Preto - SP, Brasil</p>
            <p>LinkedIn: https://www.linkedin.com/in/lfsilveira</p>
            <p>GitHub: https://github.com/skeletorlabs</p>
            <p>Website: https://www.skeletorlabs.xyz</p>
          </footer>
        </article>
      </div>
    </div>
  );
}

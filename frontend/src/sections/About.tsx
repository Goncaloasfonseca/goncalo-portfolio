
export default function About() {
  return (
    <section id="about" className="border-t border-white/5 bg-[#0c1220] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Conhece-me melhor
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Sobre mim<span className="text-blue-500">.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Introduction */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Olá! É um prazer ter-te por aqui.
            </h3>

            <div className="space-y-5 leading-8 text-slate-400">
              <p>
                Sou o Gonçalo Fonseca, licenciado em Engenharia Informática
                pelo ISTEC Porto. Tenho interesse pelo desenvolvimento de
                software, tecnologias web e criação de soluções tecnológicas.
              </p>

              <p>
                Durante o meu percurso profissional, realizei um estágio de
                seis meses na Exaud, na área de IoT, Sistemas Embebidos,
                participando no desenvolvimento de aplicações, APIs REST,
                Docker, GitHub e configuração de sistemas.
              </p>

              <p>
                Complemento a minha formação com conhecimentos de
                Cibersegurança, área na qual concluí uma formação de 300 horas.
                Procuro continuar a aprender, enfrentar novos desafios e
                contribuir para projetos em equipa.
              </p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid gap-5">

            <div className="rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:border-blue-500/40">
              <p className="mb-2 text-sm font-medium text-blue-400">
                01 / Formação académica
              </p>

              <h4 className="mb-2 text-lg font-semibold text-white">
                Engenharia Informática
              </h4>

              <p className="text-sm leading-6 text-slate-400">
                Licenciatura pelo ISTEC Porto – Instituto Superior de
                Tecnologias Avançadas do Porto.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:border-blue-500/40">
              <p className="mb-2 text-sm font-medium text-blue-400">
                02 / Experiência profissional
              </p>

              <h4 className="mb-2 text-lg font-semibold text-white">
                Software Developer
              </h4>

              <p className="text-sm leading-6 text-slate-400">
                Estágio de seis meses na Exaud, com contacto com IoT, GitHub,
                Sistemas Embebidos, APIs REST, Docker e configuração de sistemas.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:border-blue-500/40">
              <p className="mb-2 text-sm font-medium text-blue-400">
                03 / Formação complementar
              </p>

              <h4 className="mb-2 text-lg font-semibold text-white">
                Cibersegurança
              </h4>

              <p className="text-sm leading-6 text-slate-400">
                Formação de 300 horas através do IEFP, com conteúdos de
                programação, redes, análise de vulnerabilidades e segurança.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

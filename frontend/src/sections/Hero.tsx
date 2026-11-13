
import { ArrowDown, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Decoração do fundo */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">

          <p className="mb-4 text-lg font-medium text-blue-400">
            Olá, sou o Gonçalo Fonseca.
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Desenvolvedor de
            <span className="block text-blue-500">Software.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Sou licenciado em Engenharia Informática e tenho interesse no
            desenvolvimento de aplicações, tecnologias web e soluções de
            software. Procuro novos desafios que me permitam evoluir
            profissionalmente e contribuir para projetos reais.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
            >
              Ver Projetos
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              Contactar
            </a>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <a
              href="https://github.com/Goncaloasfonseca"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-white"
            >
              <FaGithub size={23} />
            </a>

            <a
              href="https://www.linkedin.com/in/goncalofonseca/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-white"
            >
              <FaLinkedin size={23} />
            </a>

            <span className="h-px w-16 bg-slate-700" />

            <span className="text-xs tracking-widest text-slate-500">
              REACT · TYPESCRIPT · C# · .NET
            </span>
          </div>
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
        >
          Explorar portefólio
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090d18] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Gonçalo Fonseca<span className="text-blue-500"></span>
        </a>

        <p className="text-center text-sm text-slate-500">
          © {currentYear} Gonçalo Fonseca. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Goncaloasfonseca"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/goncaloasfonseca/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="#home"
            aria-label="Voltar ao início"
            className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
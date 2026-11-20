import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const email = "goncaloasf@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-[#090d18] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Vamos conversar
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contacto<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Estou disponível para novos desafios e oportunidades na área
            de desenvolvimento de software. Se procuras alguém motivado,
            com vontade de aprender e evoluir, entra em contacto comigo.
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-medium text-white transition hover:bg-blue-500"
          >
            <Mail size={20} />
            Enviar email
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          <a
            href={`mailto:${email}`}
            className="group rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
          >
            <Mail className="mb-5 text-blue-400" size={26} />
            <h3 className="font-semibold text-white">Email</h3>
            <p className="mt-2 break-all text-sm text-slate-400">
              {email}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-blue-400">
              Enviar mensagem <ArrowUpRight size={16} />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/goncaloasfonseca/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
          >
            <FaLinkedin className="mb-5 text-blue-400" size={26} />
            <h3 className="font-semibold text-white">LinkedIn</h3>
            <p className="mt-2 text-sm text-slate-400">
              Liga-te comigo profissionalmente.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-blue-400">
              Visitar perfil <ArrowUpRight size={16} />
            </span>
          </a>

          <a
            href="https://github.com/Goncaloasfonseca"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
          >
            <FaGithub className="mb-5 text-blue-400" size={26} />
            <h3 className="font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-sm text-slate-400">
              Explora os meus projetos e código.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-blue-400">
              Visitar perfil <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
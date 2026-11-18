
import { FolderGit2, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
 {
    title: "Sem projetos",
    description: "Novos projetos em breve",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-[#0c1220] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            O meu trabalho
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projetos<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Um espaço dedicado aos projetos que vou desenvolvendo,
            onde exploro novas tecnologias, aplico conhecimentos
            e transformo ideias em soluções.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-xl border border-white/10 bg-[#111827] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <FolderGit2 size={24} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      <Code2 size={18} />
                      Demonstração
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-white/15 bg-[#111827]/50 px-6 py-16 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
              <FolderGit2 size={27} />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Novos projetos em breve
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
              Estou a preparar novos projetos para explorar tecnologias,
              desenvolver competências e partilhar o meu trabalho.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

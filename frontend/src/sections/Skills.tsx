const skillCategories = [
  {
    title: "Linguagens de programação",
    description: "Linguagens utilizadas no desenvolvimento de software.",
    skills: ["C#", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Desenvolvimento Web",
    description: "Tecnologias e frameworks para aplicações web.",
    skills: ["React", "ASP.NET Core", "HTML5", "CSS3", "Node.js"],
  },
  {
    title: "Bases de dados",
    description: "Armazenamento e gestão de informação.",
    skills: ["SQL Server", "MongoDB", "SQL"],
  },
  {
    title: "Ferramentas e tecnologias",
    description: "Ferramentas utilizadas em desenvolvimento e infraestrutura.",
    skills: ["Git", "GitHub", "Docker", "REST APIs", "Linux", "Raspberry Pi"],
  },
  {
    title: "Cibersegurança",
    description: "Conhecimentos adquiridos através de formação complementar.",
    skills: ["OWASP ZAP", "Análise de vulnerabilidades", "Redes", "Python"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-[#090d18] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Conhecimentos técnicos
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Competências<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Tecnologias e ferramentas com as quais tive contacto ao longo
            da minha formação académica, experiência profissional e
            formação complementar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="rounded-xl border border-white/10 bg-[#111827] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <span className="text-sm font-semibold text-blue-400">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
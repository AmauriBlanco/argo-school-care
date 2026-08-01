import { ShieldCheck, Users, GraduationCap, HeartHandshake, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const nodes = [
  { icon: GraduationCap, label: "Escola" },
  { icon: Brain, label: "Psicólogo" },
  { icon: Users, label: "Professor" },
  { icon: HeartHandshake, label: "Família" },
  { icon: ShieldCheck, label: "Aluno" },
];

export function Hero() {
  return (
    <section id="top" className="surface-soft relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-teal-soft blur-3xl opacity-60"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal shadow-soft">
            Tecnologia de apoio psicológico para escolas
          </p>

          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.1] md:text-[3.25rem]">
            Transforme informações do ambiente escolar em{" "}
            <span className="text-teal">acompanhamento</span> mais{" "}
            <span className="text-green">humano</span> e{" "}
            <span className="text-gradient-brand">inteligente</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            O ArgoSentIA conecta escola, psicólogos, professores, responsáveis e alunos em uma
            plataforma segura, organizada e preparada para apoiar a identificação de padrões
            comportamentais.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="brand" size="lg" asChild>
              <a href="#demonstracao">Solicitar demonstração</a>
            </Button>
            <Button variant="brandOutline" size="lg" asChild>
              <a href="#plataforma">Conhecer a plataforma</a>
            </Button>
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-green" aria-hidden="true" />
            Tecnologia de apoio ao trabalho profissional. Não substitui avaliação psicológica ou
            diagnóstico.
          </p>
        </div>

        <div className="reveal" style={{ animationDelay: "120ms" }}>
          <div className="rounded-2xl border border-border bg-background p-2 shadow-lift">
            <img
              src={dashboardHero}
              width={1408}
              height={1008}
              alt="Painel do ArgoSentIA com visão geral de acompanhamentos, indicadores escolares e registros recentes com dados fictícios e anonimizados"
              className="w-full rounded-xl"
            />
          </div>

          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {nodes.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-navy shadow-soft"
              >
                <Icon className="size-3.5 text-teal" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

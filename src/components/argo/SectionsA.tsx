import {
  UsersRound,
  Database,
  MessagesSquare,
  Lock,
  FileWarning,
  Search,
  Network,
  History,
  Layers,
  Handshake,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";

const trust = [
  { icon: UsersRound, label: "Acesso por diferentes perfis" },
  { icon: Database, label: "Informações centralizadas" },
  { icon: MessagesSquare, label: "Comunicação integrada" },
  { icon: Lock, label: "Segurança e privacidade" },
];

export function TrustStrip() {
  return (
    <section aria-label="Pontos de confiança" className="border-y border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {trust.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-navy">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const problems = [
  {
    icon: FileWarning,
    title: "Informações fragmentadas",
    text: "Registros importantes podem ficar espalhados entre anotações, conversas e documentos.",
  },
  {
    icon: Search,
    title: "Dificuldade para perceber padrões",
    text: "Comportamentos observados em momentos diferentes podem não ser relacionados rapidamente.",
  },
  {
    icon: Network,
    title: "Comunicação descentralizada",
    text: "Escola, profissionais e responsáveis podem ter dificuldade para compartilhar informações relevantes de forma organizada.",
  },
  {
    icon: History,
    title: "Acompanhamento pouco estruturado",
    text: "A ausência de um histórico centralizado pode dificultar a continuidade do acompanhamento.",
  },
];

export function ProblemSection() {
  return (
    <Section id="problema" tone="default">
      <SectionHeading
        eyebrow="O contexto escolar"
        title="O cuidado com o aluno não pode depender de informações espalhadas"
        description="No ambiente escolar, sinais importantes podem aparecer em diferentes momentos e serem observados por diferentes pessoas. Sem organização e comunicação, essas informações podem permanecer isoladas."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {problems.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-navy">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const pillars = [
  {
    icon: Layers,
    title: "Centralização",
    text: "Reúna registros, observações e acompanhamentos em um único ambiente.",
  },
  {
    icon: Handshake,
    title: "Colaboração",
    text: "Conecte os diferentes participantes da comunidade escolar de acordo com seus níveis de acesso.",
  },
  {
    icon: Sparkles,
    title: "Inteligência de apoio",
    text: "Utilize a tecnologia para organizar informações e auxiliar na identificação de padrões que mereçam análise profissional.",
  },
];

export function SolutionSection() {
  return (
    <Section id="plataforma" tone="soft">
      <SectionHeading
        eyebrow="A plataforma"
        title="Uma plataforma para conectar observações, pessoas e acompanhamento"
        description="O ArgoSentIA organiza informações do cotidiano escolar e oferece aos profissionais uma visão mais ampla do acompanhamento de cada aluno."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            className="reveal rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-soft text-teal">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-background px-5 py-4 text-center text-sm text-muted-foreground shadow-soft">
        Toda interpretação e decisão permanece sob responsabilidade dos profissionais habilitados.
      </p>
    </Section>
  );
}

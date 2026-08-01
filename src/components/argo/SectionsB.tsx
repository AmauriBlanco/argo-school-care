import {
  Building2,
  BrainCircuit,
  Presentation,
  HeartHandshake,
  Backpack,
  Eye,
  ListTree,
  Radar,
  MessagesSquare,
  KeyRound,
  BarChart3,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section, SectionHeading } from "./Section";

const profiles = [
  {
    id: "administracao",
    icon: Building2,
    label: "Administração",
    title: "Administração da escola",
    items: [
      "Gerenciamento de usuários",
      "Controle de acessos",
      "Visão institucional",
      "Configurações da plataforma",
      "Indicadores gerais permitidos",
    ],
  },
  {
    id: "psicologos",
    icon: BrainCircuit,
    label: "Psicólogos",
    title: "Psicólogos",
    items: [
      "Histórico de acompanhamentos",
      "Organização de observações",
      "Análise de padrões",
      "Registros profissionais",
      "Acompanhamento da evolução",
    ],
  },
  {
    id: "professores",
    icon: Presentation,
    label: "Professores",
    title: "Professores",
    items: [
      "Registro de observações",
      "Acompanhamento de solicitações",
      "Comunicação conforme permissões",
      "Sinalização de mudanças comportamentais",
    ],
  },
  {
    id: "responsaveis",
    icon: HeartHandshake,
    label: "Responsáveis",
    title: "Responsáveis",
    items: [
      "Comunicação com a escola",
      "Participação em formulários",
      "Acompanhamento de orientações",
      "Atualização de informações autorizadas",
    ],
  },
  {
    id: "alunos",
    icon: Backpack,
    label: "Alunos",
    title: "Alunos",
    items: [
      "Formulários apropriados à idade",
      "Canais de participação",
      "Atividades de acompanhamento",
      "Comunicação protegida e orientada",
    ],
  },
];

export function ProfilesSection() {
  return (
    <Section id="perfis">
      <SectionHeading
        eyebrow="Perfis de acesso"
        title="Cada participante acessa o que realmente precisa"
      />
      <Tabs defaultValue="administracao" className="mt-10">
        <TabsList className="flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
          {profiles.map(({ id, icon: Icon, label }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-muted-foreground shadow-soft transition-colors data-[state=active]:border-navy data-[state=active]:bg-navy data-[state=active]:text-primary-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {profiles.map(({ id, icon: Icon, title, items }) => (
          <TabsContent key={id} value={id} className="mt-8">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft md:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl bg-muted px-4 py-3 text-sm text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-green"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        As permissões variam conforme o perfil e as políticas definidas pela escola.
      </p>
    </Section>
  );
}

const benefits = [
  {
    icon: Eye,
    title: "Visão centralizada",
    text: "Acompanhe informações relevantes sem depender de diferentes ferramentas.",
  },
  {
    icon: ListTree,
    title: "Histórico organizado",
    text: "Consulte registros e acompanhamentos dentro de uma linha do tempo estruturada.",
  },
  {
    icon: Radar,
    title: "Identificação de padrões",
    text: "Apoie a análise profissional com informações observadas ao longo do tempo.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação integrada",
    text: "Facilite a colaboração entre escola, psicólogos, professores e responsáveis.",
  },
  {
    icon: KeyRound,
    title: "Acessos personalizados",
    text: "Entregue a cada perfil apenas as informações e funcionalidades necessárias.",
  },
  {
    icon: BarChart3,
    title: "Gestão baseada em contexto",
    text: "Ajude a escola a compreender melhor suas demandas de acompanhamento psicológico.",
  },
];

export function BenefitsSection() {
  return (
    <Section id="beneficios" tone="muted">
      <SectionHeading
        eyebrow="Benefícios"
        title="Mais organização para a escola. Mais contexto para os profissionais."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-green-soft text-navy">
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

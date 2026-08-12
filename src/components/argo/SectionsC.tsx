import {
  ShieldCheck,
  ScrollText,
  UserCog,
  FileCheck2,
  Scale,
  School,
  Network,
  Users,
  HeartPulse,
  BookOpenCheck,
  Sparkles,
  Clock,
  ListFilter,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import screenRegistro from "@/assets/screen-registro.jpg";
import screenTimeline from "@/assets/screen-timeline.jpg";
import screenAnalise from "@/assets/screen-analise.jpg";
import ilustracao from "@/assets/ilustracao-conexao.png";

const showcase = [
  {
    kicker: "Organize as observações",
    title: "Registre informações importantes no momento em que elas acontecem",
    text: "Professores e profissionais autorizados podem registrar observações de forma estruturada, criando um histórico mais claro para o acompanhamento.",
    bullets: ["Categoria e data", "Contexto e descrição", "Nível de acesso do registro"],
    image: screenRegistro,
    alt: "Tela de registro de observação com categoria, data, contexto, descrição e nível de acesso",
  },
  {
    kicker: "Visualize a evolução",
    title: "Acompanhe o histórico de forma simples e organizada",
    text: "Visualize registros em uma linha do tempo e encontre informações relevantes sem consultar documentos separados.",
    bullets: ["Linha do tempo de registros", "Filtros por período", "Categorias de acompanhamento"],
    image: screenTimeline,
    alt: "Linha do tempo de acompanhamentos com filtros por período e categorias, com dados fictícios",
  },
  {
    kicker: "Apoie a análise profissional",
    title: "Encontre conexões que poderiam passar despercebidas",
    text: "A plataforma organiza dados e apresenta padrões para análise, ajudando psicólogos a enxergar recorrências e mudanças comportamentais com mais contexto.",
    bullets: [
      "Tendências e gráficos discretos",
      "Alertas de atenção",
      "Categorias comportamentais",
    ],
    image: screenAnalise,
    alt: "Painel com tendências, gráficos discretos, alertas de atenção e categorias comportamentais",
  },
];

export function ShowcaseSection() {
  return (
    <Section id="recursos">
      <SectionHeading
        eyebrow="Demonstração do produto"
        title="Recursos pensados para o dia a dia da escola"
        description="Telas ilustrativas com dados fictícios e anonimizados. Os recursos apoiam o trabalho profissional e não realizam diagnóstico automático."
      />
      <div className="mt-14 flex flex-col gap-16 md:gap-24">
        {showcase.map((block, i) => (
          <article key={block.title} className="reveal grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                {block.kicker}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                {block.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{block.text}</p>
              <ul className="mt-6 space-y-2.5">
                {block.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <FileCheck2 className="size-4 text-green" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="rounded-2xl border border-border bg-muted p-2 shadow-lift">
                <img
                  src={block.image}
                  alt={block.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

const steps = [
  {
    title: "A escola configura o ambiente",
    text: "A administração cadastra os profissionais, turmas, alunos e permissões.",
  },
  {
    title: "Os participantes registram informações",
    text: "Usuários autorizados enviam observações, formulários e registros conforme seu perfil.",
  },
  {
    title: "A plataforma organiza os dados",
    text: "As informações são centralizadas e apresentadas de forma estruturada.",
  },
  {
    title: "Os profissionais analisam e acompanham",
    text: "Psicólogos utilizam os dados como apoio para avaliações, orientações e acompanhamentos.",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="como-funciona" tone="soft">
      <SectionHeading
        eyebrow="Como funciona"
        title="Da observação ao acompanhamento em quatro etapas"
      />
      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="reveal relative rounded-2xl border border-border bg-card p-6 shadow-soft"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const aiPoints = [
  { icon: Sparkles, text: "Sugestão de padrões e recorrências" },
  { icon: Clock, text: "Organização de informações ao longo do tempo" },
  { icon: ListFilter, text: "Apoio na priorização de registros para análise" },
];

export function AiSection() {
  return (
    <Section id="ia">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
            Inteligência artificial
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-[2.4rem]">
            Inteligência artificial como apoio, não como substituição
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            No ArgosSentIA, a inteligência artificial é utilizada para organizar informações,
            encontrar recorrências e facilitar a análise de grandes volumes de registros.
          </p>
          <ul className="mt-7 space-y-3">
            {aiPoints.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium text-navy shadow-soft"
              >
                <Icon className="size-4 text-teal" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded-2xl border border-teal/25 bg-teal-soft p-8 shadow-soft">
          <ShieldCheck className="size-8 text-teal" aria-hidden="true" />
          <p className="mt-4 text-lg font-bold leading-snug text-navy">
            A tecnologia não realiza diagnóstico psicológico, não substitui profissionais e não toma
            decisões sobre os alunos.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Todos os recursos automatizados existem para reduzir esforço operacional e ampliar o
            contexto disponível para quem é habilitado a analisar cada situação.
          </p>
        </div>
      </div>
    </Section>
  );
}

const securityPillars = [
  {
    icon: UserCog,
    title: "Controle de acesso por perfil",
    text: "Cada usuário visualiza somente as informações permitidas para sua função.",
  },
  {
    icon: ScrollText,
    title: "Registros de acesso e atividades",
    text: "Ações importantes podem ser registradas para acompanhamento e auditoria.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção das informações",
    text: "Os dados devem ser tratados com práticas adequadas de segurança e privacidade.",
  },
  {
    icon: FileCheck2,
    title: "Consentimento e transparência",
    text: "A escola poderá organizar os processos de autorização e comunicação com os responsáveis.",
  },
  {
    icon: Scale,
    title: "Adequação à LGPD",
    text: "Desenvolvido considerando os princípios da LGPD e boas práticas de proteção de dados.",
  },
];

export function SecuritySection() {
  return (
    <Section id="seguranca" tone="muted">
      <SectionHeading
        eyebrow="Segurança e privacidade"
        title="Privacidade e segurança desde a concepção"
        description="A proteção das informações deve fazer parte de toda a experiência do ArgosSentIA, desde o controle de acesso até o armazenamento dos registros."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {securityPillars.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["Política de Privacidade", "Termos de Uso", "Política de Segurança"].map((doc) => (
          <a
            key={doc}
            href="#demonstracao"
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-teal hover:text-navy"
          >
            {doc} — em breve
          </a>
        ))}
      </div>
    </Section>
  );
}

const audience = [
  { icon: School, title: "Escolas particulares" },
  { icon: Network, title: "Redes de ensino" },
  { icon: BookOpenCheck, title: "Colégios com psicologia escolar" },
  { icon: Users, title: "Instituições com equipes multidisciplinares" },
  { icon: HeartPulse, title: "Projetos de apoio socioemocional" },
];

export function AudienceSection() {
  return (
    <Section id="para-quem">
      <SectionHeading
        eyebrow="Para quem é"
        title="Desenvolvido para instituições que valorizam o acompanhamento integral dos alunos"
        description="A plataforma pode ser configurada de acordo com a estrutura, os processos e as permissões de cada instituição."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {audience.map(({ icon: Icon, title }, i) => (
          <article
            key={title}
            className="reveal flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-soft text-navy">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold leading-snug">{title}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WhySection() {
  return (
    <Section id="proposito" tone="soft">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Nosso propósito</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-[2.4rem]">
            Tecnologia criada para apoiar quem cuida
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            O ArgosSentIA nasceu da necessidade de aproximar as pessoas que participam do
            desenvolvimento do aluno. Acreditamos que informações organizadas, comunicação
            responsável e tecnologia bem aplicada podem oferecer mais contexto para o trabalho dos
            profissionais e mais estrutura para as instituições de ensino.
          </p>
          <blockquote className="mt-7 rounded-2xl border-l-4 border-green bg-background p-6 text-lg font-semibold leading-snug text-navy shadow-soft">
            Nosso objetivo não é substituir o olhar humano, mas ajudá-lo a enxergar com mais
            clareza.
          </blockquote>
        </div>
        <img
          src={ilustracao}
          alt="Ilustração conectando escola, psicólogo, professor, família e aluno"
          loading="lazy"
          width={1200}
          height={912}
          className="reveal w-full"
        />
      </div>
    </Section>
  );
}

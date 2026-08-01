import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Section, SectionHeading } from "./Section";
import { Logo } from "./Logo";

const fields = [
  { id: "nome", label: "Nome", type: "text", autoComplete: "name", required: true },
  { id: "cargo", label: "Cargo", type: "text", autoComplete: "organization-title" },
  { id: "instituicao", label: "Instituição", type: "text", autoComplete: "organization" },
  {
    id: "email",
    label: "E-mail profissional",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  { id: "telefone", label: "Telefone", type: "tel", autoComplete: "tel" },
  { id: "alunos", label: "Número aproximado de alunos", type: "text" },
];

export function DemoSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    toast.success("Solicitação registrada", {
      description: "Nossa equipe entrará em contato pelo e-mail informado.",
    });
    event.currentTarget.reset();
  }

  return (
    <Section id="demonstracao" tone="soft">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
            Acesso inicial
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-[2.4rem]">
            Conheça uma nova forma de organizar o acompanhamento psicológico escolar
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Solicite uma apresentação do ArgoSentIA e descubra como a plataforma poderá se adaptar à
            realidade da sua instituição.
          </p>
          <p className="mt-6 rounded-xl border border-border bg-background px-5 py-4 text-sm text-muted-foreground shadow-soft">
            Estamos selecionando instituições interessadas em conhecer e contribuir com a evolução
            da plataforma.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal rounded-2xl border border-border bg-card p-6 shadow-lift md:p-8"
          aria-label="Formulário de solicitação de demonstração"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className={field.id === "alunos" ? "sm:col-span-2" : ""}>
                <Label htmlFor={field.id} className="text-sm font-semibold text-navy">
                  {field.label}
                  {field.required ? <span aria-hidden="true"> *</span> : null}
                </Label>
                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required={field.required}
                  className="mt-1.5 h-11 rounded-lg"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <Label htmlFor="mensagem" className="text-sm font-semibold text-navy">
                Mensagem
              </Label>
              <Textarea id="mensagem" name="mensagem" rows={4} className="mt-1.5 rounded-lg" />
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Ao enviar, você concorda em ser contatado pela equipe do ArgoSentIA sobre a plataforma.
            Não solicitamos informações sobre alunos neste formulário.
          </p>

          <Button type="submit" variant="brand" size="lg" className="mt-5 w-full">
            Solicitar demonstração
          </Button>

          {sent ? (
            <p role="status" className="mt-4 text-center text-sm font-medium text-green">
              Recebemos sua solicitação. Em breve entraremos em contato.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "O ArgoSentIA substitui o psicólogo?",
    a: "Não. A plataforma oferece recursos de organização e apoio à análise, mas avaliações, interpretações e decisões permanecem sob responsabilidade dos profissionais habilitados.",
  },
  {
    q: "A plataforma realiza diagnósticos?",
    a: "Não. O ArgoSentIA não realiza diagnósticos psicológicos ou clínicos.",
  },
  {
    q: "Quem poderá acessar as informações dos alunos?",
    a: "O acesso será definido por perfil, permissões e regras configuradas pela instituição.",
  },
  {
    q: "Professores e responsáveis terão o mesmo acesso?",
    a: "Não. Cada perfil terá funcionalidades e níveis de acesso específicos.",
  },
  {
    q: "A inteligência artificial toma decisões?",
    a: "Não. A IA poderá organizar informações e apontar possíveis padrões, mas não tomará decisões sobre alunos ou acompanhamentos.",
  },
  {
    q: "O ArgoSentIA poderá ser personalizado para cada escola?",
    a: "A plataforma deverá permitir configurações de usuários, permissões e processos conforme a estrutura da instituição.",
  },
  {
    q: "O sistema funcionará em celulares?",
    a: "A interface deverá ser responsiva e funcionar em computadores, tablets e celulares.",
  },
  {
    q: "Como os dados serão protegidos?",
    a: "A plataforma será desenvolvida considerando boas práticas de segurança, controle de acesso e proteção de dados.",
  },
  {
    q: "Já posso contratar?",
    a: "O ArgoSentIA está em fase inicial. Instituições interessadas podem solicitar uma demonstração ou entrar em contato para conhecer a proposta.",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="Perguntas frequentes" title="Dúvidas comuns sobre o ArgoSentIA" />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-final"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h2
          id="cta-final"
          className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-[2.6rem]"
        >
          Mais conexão para a escola. Mais contexto para os profissionais. Mais cuidado com os
          alunos.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/85">
          Conheça o ArgoSentIA e participe da construção de uma plataforma pensada para o
          acompanhamento psicológico no ambiente escolar.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button variant="onDark" size="lg" asChild>
            <a href="#demonstracao">Solicitar demonstração</a>
          </Button>
          <Button variant="onDarkOutline" size="lg" asChild>
            <a href="mailto:contato@argosentia.com.br">Falar com nossa equipe</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const footerLinks = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            ArgoSentIA — Tecnologia de apoio ao acompanhamento psicológico escolar, conectando
            escola, profissionais, responsáveis e alunos.
          </p>
          <a
            href="mailto:contato@argosentia.com.br"
            className="mt-4 inline-block text-sm font-semibold text-teal hover:underline"
          >
            contato@argosentia.com.br
          </a>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-bold text-navy">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#demonstracao"
                className="text-sm text-muted-foreground transition-colors hover:text-navy"
              >
                Entrar
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Documentos legais">
          <h2 className="text-sm font-bold text-navy">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="#seguranca"
                className="text-sm text-muted-foreground transition-colors hover:text-navy"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="#seguranca"
                className="text-sm text-muted-foreground transition-colors hover:text-navy"
              >
                Termos de Uso
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} ArgoSentIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

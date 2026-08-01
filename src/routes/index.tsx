import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/argo/Header";
import { Hero } from "@/components/argo/Hero";
import { TrustStrip, ProblemSection, SolutionSection } from "@/components/argo/SectionsA";
import { ProfilesSection, BenefitsSection } from "@/components/argo/SectionsB";
import {
  ShowcaseSection,
  HowItWorksSection,
  AiSection,
  SecuritySection,
  AudienceSection,
  WhySection,
} from "@/components/argo/SectionsC";
import { DemoSection, FaqSection, FinalCta, Footer } from "@/components/argo/SectionsD";

const title = "ArgoSentIA | Apoio psicológico e inteligência para escolas";
const description =
  "O ArgoSentIA conecta escolas, psicólogos, professores, responsáveis e alunos em uma plataforma de apoio ao acompanhamento psicológico escolar.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "psicologia escolar, software para psicólogos escolares, acompanhamento psicológico escolar, plataforma para escolas, saúde emocional nas escolas, tecnologia educacional, gestão de acompanhamento de alunos, inteligência artificial para escolas",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ArgoSentIA",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          inLanguage: "pt-BR",
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <ProfilesSection />
        <BenefitsSection />
        <ShowcaseSection />
        <HowItWorksSection />
        <AiSection />
        <SecuritySection />
        <AudienceSection />
        <WhySection />
        <DemoSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" aria-label="ArgosSentIA — início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#demonstracao"
            className="rounded-md px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
          >
            Entrar
          </a>
          <Button variant="brand" asChild>
            <a href="#demonstracao">Solicitar demonstração</a>
          </Button>
        </div>

        <Button
          variant="brandOutline"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-border bg-background px-5 pb-6 pt-4 shadow-soft lg:hidden"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="brandOutline" asChild onClick={() => setOpen(false)}>
              <a href="#demonstracao">Entrar</a>
            </Button>
            <Button variant="brand" asChild onClick={() => setOpen(false)}>
              <a href="#demonstracao">Solicitar demonstração</a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

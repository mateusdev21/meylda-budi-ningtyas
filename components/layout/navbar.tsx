import { Container } from "./container";
import { ThemeToggle } from "../ui/theme-toggle";
import { MobileMenu } from "../ui/mobile-menu";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-wide text-primary"
          >
            Meylda
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "../ui/button";
import "../../styles/hero.css";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#practice", label: "Practice" },
  { href: "/ai-guide/", label: "AI Guide" },
  { href: "mailto:shaharkozniak@gmail.com", label: "Contact" },
];

const SOCIAL = [
  { href: "https://github.com/ShaharKoza", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/shahar-kozniak", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:shaharkozniak@gmail.com", label: "Email", icon: Mail },
];

const INTRO = [
  "I'm a Computer Science graduate focused on building practical AI and automation systems.",
  "I develop LLM agents, n8n workflows, and Python integrations to solve real business bottlenecks.",
  "By actively coding alongside advanced AI tools like Cursor, Claude Code, Antigravity, and Gemini,",
  "I'm able to build and iterate rapidly. My approach is system-wide: successfully connecting software,",
  "infrastructure, and business processes always starts with deep, precise characterization and planning",
  "before any actual development.",
];

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}

function BlurText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = usePrefersReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          className="inline-block"
          initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export function PortfolioHero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="portfolio-hero" className="relative">
      <header className="hero-bar sticky top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-12">
        <button type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
        <a href="/" className="hero-accent font-mono text-sm tracking-[0.22em]">
          SK
        </a>
        <button type="button" className="theme-toggle" data-theme-toggle aria-label="Toggle color theme">
          <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
          <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
        </button>
      </header>

      {open && (
        <nav className="hero-menu absolute inset-x-0 top-16 z-20 flex flex-col gap-4 px-6 py-6 sm:px-12" style={{ background: "var(--bg)" }}>
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <div className="flex flex-col items-center px-4 pb-6 pt-2 text-center sm:px-8">
        <h1>
          <BlurText text="SHAHAR" className="block" />
          <BlurText text="KOZNIAK" className="hero-accent block" delay={0.28} />
        </h1>

        <p className="hero-intro">
          {INTRO.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href="mailto:shaharkozniak@gmail.com">Get in Touch</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/#work">View Projects</a>
          </Button>
        </div>

        <ul className="mt-4 flex items-center gap-5 p-0" style={{ listStyle: "none" }}>
          {SOCIAL.map((item) => (
            <li key={item.label}>
              <a
                className="hero-icon"
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <item.icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

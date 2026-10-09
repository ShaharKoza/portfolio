import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { contact, nav, site } from "../../lib/site";
import "../../styles/hero.css";

const NAV = [...nav, contact];

const SOCIAL = [
  { href: site.github, label: "GitHub", icon: Github },
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
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
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!reduce) setRun(true);
  }, [reduce]);
  return (
    <span className={className} aria-hidden="true">
      {text.split("").map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          className="inline-block"
          initial={false}
          animate={
            run
              ? { opacity: [0, 1], y: [28, 0], filter: ["blur(12px)", "none"] }
              : { opacity: 1, y: 0, filter: "none" }
          }
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
  const barRef = useRef<HTMLElement>(null);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const sync = () => setBarHeight(bar.offsetHeight);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="portfolio-hero" className="relative" style={open ? { paddingTop: barHeight } : undefined}>
      <header ref={barRef} className={`hero-bar top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-12 ${open ? "is-open" : "sticky"}`}>
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
        {open && (
          <nav className="hero-menu absolute inset-x-0 top-full z-20 flex flex-col gap-4 px-6 py-6 sm:px-12">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <div className="flex flex-col items-center px-4 pb-6 pt-2 text-center sm:px-8">
        <h1>
          <span className="hero-name">Shahar Kozniak</span>
          <BlurText text="SHAHAR" className="block" />
          <BlurText text="KOZNIAK" className="hero-accent block" delay={0.28} />
        </h1>

        <p className="hero-intro">
          {INTRO.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a className="hero-btn hero-btn-primary" href={`mailto:${site.email}`}>
            Get in Touch
          </a>
          <a className="hero-btn hero-btn-outline" href="/#work">
            View Projects
          </a>
        </div>

        <ul className="hero-social mt-4 flex items-center gap-5 p-0">
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

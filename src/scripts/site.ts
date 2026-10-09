const applyTheme = (theme: 'light' | 'dark') => {
  const light = theme === 'light';
  document.documentElement.classList.toggle('light', light);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#faf7f2' : '#090909');
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
  });
};

applyTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark');

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element) || !target.closest('[data-theme-toggle]')) return;
  const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* storage can be blocked */
  }
  applyTheme(next);
});

const projectDialog = document.querySelector<HTMLDialogElement>('#project-dialog');
const projectKicker = projectDialog?.querySelector<HTMLElement>('[data-project-kicker]');
const projectTitle = projectDialog?.querySelector<HTMLElement>('[data-project-title]');
const projectStat = projectDialog?.querySelector<HTMLElement>('[data-project-stat]');
const projectSummary = projectDialog?.querySelector<HTMLElement>('[data-project-summary]');
const projectTags = projectDialog?.querySelector<HTMLElement>('[data-project-tags]');
const projectLinks = projectDialog?.querySelector<HTMLElement>('[data-project-links]');

type ProjectDetails = {
  title: string;
  year: number;
  stat: string;
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const openProject = (raw: string) => {
  if (!projectDialog || !projectTitle || !projectSummary || !projectTags || !projectLinks || !projectKicker || !projectStat) return;
  let data: ProjectDetails;
  try {
    data = JSON.parse(raw) as ProjectDetails;
  } catch {
    return;
  }
  if (!Array.isArray(data.tags) || !Array.isArray(data.links)) return;
  projectKicker.textContent = `Project · ${data.year}`;
  projectTitle.textContent = data.title;
  projectSummary.textContent = data.summary;
  projectStat.hidden = !data.stat;
  projectStat.textContent = data.stat;
  projectTags.replaceChildren();
  for (const tag of data.tags) {
    const item = document.createElement('li');
    item.textContent = tag;
    projectTags.append(item);
  }
  projectTags.hidden = data.tags.length === 0;
  projectLinks.replaceChildren();
        for (const link of data.links) {
          if (!link || typeof link.href !== 'string' || typeof link.label !== 'string') continue;
          if (!link.href.startsWith('https://')) continue;
          const anchor = document.createElement('a');
          anchor.href = link.href;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = link.label;
    projectLinks.append(anchor);
  }
  projectLinks.hidden = data.links.length === 0;
  projectDialog.showModal();
};

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element) || !projectDialog) return;
  const opener = target.closest<HTMLElement>('[data-project]');
  if (opener) {
    const raw = opener.getAttribute('data-project');
    if (raw) openProject(raw);
    return;
  }
        if (target.closest('[data-close-project]')) {
          projectDialog.close();
          return;
        }
        if (target === projectDialog) {
          const box = projectDialog.getBoundingClientRect();
          const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
          if (!inside) projectDialog.close();
        }
});

const els = document.querySelectorAll('[data-reveal]');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  els.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

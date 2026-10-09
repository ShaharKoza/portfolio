export const site = {
  name: 'Shahar Kozniak',
  email: 'shaharkozniak@gmail.com',
  github: 'https://github.com/ShaharKoza',
  linkedin: 'https://www.linkedin.com/in/shahar-kozniak',
  cv: '/Shahar-Kozniak-CV.pdf',
} as const;

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#practice', label: 'Practice' },
  { href: '/ai-guide/', label: 'AI Guide' },
] as const;

export const contact = {
  href: `mailto:${site.email}`,
  label: 'Contact',
} as const;

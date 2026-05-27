// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Stephen Murdoch';
export const SITE_DESCRIPTION = 'Programmer in Largs, Scotland. Travel industry by day, side projects by night.';
export const SITE_IMAGE = '/blog-placeholder-about.jpg';

export const SITE_LOCATION = 'largs, scotland';
export const SITE_BIRTH_YEAR = '1978 AD';

export const HERO_SUB = 'programmer  ·  largs, scotland  ·  est. 1978 AD';

export const BIO = [
  'I build software for the travel industry by day, and side projects with AI coding tools by night. I live by the sea in Largs, on the west coast of Scotland.',
];

export type Project = {
  name: string;
  href: string;
  desc: string;
  status: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'forcepull.com',
    href: 'https://forcepull.com',
    desc: 'a job board built around relevance, not volume. no upsells, no email walls, no horseshit.',
    status: 'live',
  },
  {
    name: 'moringa-bazinga.com',
    href: 'https://moringa-bazinga.com',
    desc: 'a small thing with a name I am refusing to apologise for.',
    status: 'live',
  },
];

export const GITHUB_URL = 'https://github.com/murdoch';
export const EMAIL = 'stephen@murdo.ch';

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Celstomp',
      url: '/docs',
    },
    githubUrl: 'https://github.com/Celstomp/celstomp',
  };
}

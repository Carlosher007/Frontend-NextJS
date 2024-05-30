export type SiteConfig = typeof siteConfig;

const logged = true;

export const siteConfig = {
  name: 'ImageHub',
  description: 'The best web application to sell and buy images',
  navItems: [
    {
      label: 'Home',
      href: '/dashboard',
    },
    {
      label: 'Images',
      href: '/dashboard/images',
    },
    logged && {
      label: 'Logout',
      href: 'dashboard/logout',
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/dashboard',
    },
    {
      label: 'Images',
      href: '/dashboard/images',
    },
    logged && {
      label: 'Logout',
      href: '/dashboard/logout',
    },
  ],
  links: {
    github: 'https://github.com/orgs/ImageHub-UV/repositories',
  },
};

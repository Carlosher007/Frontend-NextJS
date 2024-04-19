export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'ImageHub',
  description: 'The best web application to sell and buy images',
  navMenuItems: [
    {
      label: 'Home',
      href: '/dashboard',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/orgs/ImageHub-UV/repositories',
  },
};

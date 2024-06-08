import { useUserStore } from '../store';

export type SiteConfig = typeof siteConfig;

export const useSiteConfig = () => {
  const [idUser] = useUserStore((state) => [state.idUser]);

  return {
		navItems: [
			{
				label: 'Home',
				href: '/dashboard',
			},
			{
				label: 'Images',
				href: '/dashboard/images',
			},
			idUser && {
				label: 'Logout',
				href: '/dashboard/logout',
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
			idUser && {
				label: 'Logout',
				href: '/dashboard/logout',
			},
		],
		links: {
			github: 'https://github.com/orgs/ImageHub-UV/repositories',
		},
	};
};

export const siteConfig = {
  name: 'ImageHub',
  description: 'The best web application to sell and buy images',
};

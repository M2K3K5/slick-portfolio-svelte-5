import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		'Self-taught software developer. I like to code projects like websites, REST-APIs, Windows applications, Discord Bots, browser extensions.',
	links: [
		// { label: 'GitHub', href: 'https://github.com/M2K3K5', icon: 'i-carbon-logo-github' },
		// { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-carbon-logo-linkedin' },
		// { label: 'Twitter', href: 'https://twitter.com', icon: 'i-carbon-logo-twitter' },
		// { label: 'Email', href: 'mailto:', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;

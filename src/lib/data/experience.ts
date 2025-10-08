import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

export const items: Array<Experience> = [
	{
		slug: 'software-developer-job',
		company: 'Big e-commerce company',
		description: 'Working for a big e-commerce company',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Office',
		period: { from: new Date("Aug 1, 2022"), to: new Date() },
		skills: getSkills('cs', 'py', 'sql'),
		name: 'Employee',
		color: '#ffffff',
		links: [],
		logo: Assets.Default,
		shortDescription: ''
	},
	{
		slug: 'software-developer-private',
		company: 'Self-Educated',
		description: 'Learning all about coding and creating nice projects',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("Dec 24, 2019"), to: new Date() },
		skills: getSkills('rs', 'js', 'cs', 'java', 'sql', 'svelte','vue', 'bootstrap', 'html', 'css', 'node', 'php'),
		name: 'Learning coding',
		color: '#ffffff',
		links: [],
		logo: Assets.Default,
		shortDescription: ''
	},
	{
		slug: 'software-developer-internship',
		company: 'Consulting',
		description: 'Internship with a consulting firm',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Office',
		period: { from: new Date("Jul 20, 2021"), to: new Date("Feb 28, 2022") },
		skills: getSkills('js', 'vba'),
		name: 'Internship',
		color: '#ffffff',
		links: [],
		logo: Assets.Default,
		shortDescription: ''
	}
];

items.sort((a, b) => b.period.to.getTime() - a.period.to.getTime());

const ExperienceData = { title, items };

export default ExperienceData;

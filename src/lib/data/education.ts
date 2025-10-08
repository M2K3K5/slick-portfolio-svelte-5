import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

export const items: Array<Education> = [
	{
		degree: 'Student of applied computer science',
		description: '',
		location: 'Germany',
		logo: Assets.Default,
		name: '',
		organization: 'University',
		period: { from: new Date("Aug 1, 2022"), to: new Date()},
		shortDescription: '',
		slug: 'study',
		subjects: ['Algorithm', 'Java']
	},
	{
		degree: 'Software Developer',
		description: '',
		location: 'Germany',
		logo: Assets.Default,
		name: '',
		organization: 'Big e-commerce company',
		period: { from: new Date("Aug 1, 2022"), to: new Date()},
		shortDescription: '',
		slug: 'job',
		subjects: ['IT-Security', 'Python', 'C#', 'SQL', 'Robotic Process Automation']
	}
];

items.sort((a, b) => b.period.to.getTime() - a.period.to.getTime());

const EducationData = { title, items };

export default EducationData;

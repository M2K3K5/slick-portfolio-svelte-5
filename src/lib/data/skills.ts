import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

export const items = [
	defineSkill({
		slug: 'rs',
		color: '#FF5733',
		description:
			'Rust is a systems programming language known for its focus on performance and memory safety. It is often used for developing high-performance applications, system-level software, and embedded systems. With its strong type system and ownership model, Rust helps prevent common programming errors.',
		logo: Assets.RustCrab,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cs',
		color: 'green',
		description:
			'C# (C Sharp) is a versatile and modern programming language developed by Microsoft. It is widely used for building Windows applications, web applications using ASP.NET, and game development with the Unity game engine. C# supports object-oriented programming and provides a rich set of libraries and features.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'py',
		color: 'blue',
		description:
			'Python is a powerful and versatile programming language used for web development, data science, artificial intelligence, automation, and more. It is known for its simplicity and readability, making it an excellent choice for beginners and experienced developers alike.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description:
			'Java is a widely-used, platform-independent programming language known for its portability and reliability. It is commonly used for developing enterprise-level applications, mobile applications (Android), and large-scale distributed systems. The philosophy of Java "write once, run anywhere"  makes it a popular choice in various domains.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is the language of the web, used for building interactive and dynamic web applications. It runs in web browsers and allows developers to create engaging user interfaces. JavaScript is a crucial part of the modern web development stack, often used alongside HTML and CSS.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Svelte is a modern JavaScript framework that simplifies web development by shifting much of the work from the browser to the build step. It results in highly optimized and efficient web applications. Svelte\'s declarative syntax and reactive approach enhance developer productivity.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description:
			'Vue.js is a progressive JavaScript framework for building user interfaces. It is known for its simplicity and ease of integration. Vue.js is often used to create interactive and reactive components, making it a popular choice for front-end development.',
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Bootstrap is a front-end framework that simplifies the process of designing responsive and visually appealing websites. It provides a collection of pre-designed components and styles, allowing developers to create consistent and modern user interfaces quickly.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description:
			'SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It is used to perform tasks such as querying data, updating records, and managing database structures. SQL is essential for anyone working with databases.',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'node',
		color: 'green',
		description:
			'Node.js is a server-side JavaScript runtime that allows developers to build scalable and efficient network applications. It is commonly used to create server-side APIs and is a key component in the MEAN/MERN stack for full-stack JavaScript development.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) is a styling language used to control the presentation of HTML documents. It is essential for creating visually appealing and responsive web pages. CSS enables developers to define layouts, colors, and styles.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures the content of a webpage, defining elements such as headings, paragraphs, and images. HTML is a fundamental skill for web developers.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'vba',
		color: 'green',
		description:
			'VBA (Visual Basic for Applications) is a programming language integrated into Microsoft Office applications. It is used to automate repetitive tasks, create custom solutions, and enhance functionality within Excel, Word, and other Office programs.',
		logo: Assets.Default,
		name: 'VBA',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description:
			'PHP (Hypertext Preprocessor) is a server-side scripting language widely used for web development. It is especially suited for building dynamic and interactive websites. PHP is embedded in HTML and can connect to various databases for data processing.',
		logo: Assets.Php,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'react',
		color: 'blue',
		description:
			'React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). It is widely used for creating dynamic and responsive web applications. React promotes a component-based architecture and makes it easy to manage the state of complex applications, making it a favorite choice for front-end development.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'framework'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is a statically typed superset of JavaScript that adds optional type checking and other features to enhance the development process. It is commonly used in large-scale JavaScript applications, providing better tooling and reducing errors during development. TypeScript is often used in combination with frameworks like React, Angular, and Node.js to improve code quality and maintainability.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;

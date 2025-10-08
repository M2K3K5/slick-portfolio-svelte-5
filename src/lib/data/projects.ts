import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

// const items: Array<Project> = [
// 	{
// 		slug: 'slick-portfolio-angular',
// 		color: '#5e95e3',
// 		description:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
// 		shortDescription:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
// 		links: [
// 			{ to: 'https://github.com/', label: 'GitHub' },
// 			{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Reporsitory' },
// 			{ to: 'https://svelte.dev/', label: 'Svelte' },
// 			{ to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
// 		],
// 		logo: Assets.Unknown,
// 		name: 'Slick Portfolio With Svelte',
// 		period: {
// 			from: new Date()
// 		},
// 		skills: getSkills('angular', 'ts', 'tailwind'),
// 		type: 'Website Template'
// 	}
// ];

export const items: Array<Project> = [
	{
		slug: 'website-homepage',
		color: '#ff3e00',
		description:
			'This project is a clean and user-friendly homepage for visitors of my website. Here you can see previous projects, skills and programming languages used. Information on individual skills and projects can also be displayed and filtered according to them. Design: Riadh Adrani',
		shortDescription:
			'This project is my clean and user-friendly homepage for visitors of my website. Here you can see previous projects, skills and programming languages used.',
		links: [{ to: 'https://lueders.dev/', label: 'View project' }],
		logo: Assets.Svelte,
		name: 'Homepage',
		period: {
			from: new Date("Jan 11, 2024"),
			to: new Date("Jan 14, 2024")
		},
		skills: getSkills('svelte', 'js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/homepage.png'
			}
		]
	},
	{
		slug: 'website-nakplan',
		color: '#5e95e3',
		description:
			'A TypeScript-based timetable for Nordakademie that loads and parses ICS files from the university website. The website is designed to be simple and user-friendly, featuring a beautiful UI with different views and the ability to view all centuries. It is also a Progressive Web App (PWA) and can be installed on your phone.',
		shortDescription:
			'A TypeScript based timetable for all centuries of the Nordakademie with a nice UI and different views.',
		links: [{ to: 'https://lueders.dev/nakplan', label: 'View project' }],
		logo: Assets.Default,
		name: 'Nakplan',
		period: {
			from: new Date("Oct 10, 2024"),
			to: new Date("Oct 29, 2024"),
		},
		skills: getSkills('ts', 'css'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/website-nakplan.png'
			}
		]
	},
	{
		slug: 'website-your-spotify',
		color: '#00ff00',
		description:
			'Your Spotify is a application that tracks what you listen and offers you a dashboard to explore statistics about it.',
		shortDescription:
			'Your Spotify is a application that tracks what you listen and offers you a dashboard to explore statistics about it.',
		links: [{ to: 'https://music.lueders.dev/', label: 'View project' }],
		logo: Assets.Default,
		name: 'Your Spotify',
		period: {
			from: new Date("Jul 08, 2024"),
			to: new Date("Sep 26, 2024"),
		},
		skills: getSkills('ts', 'react', 'css'),
		type: 'Website',
		screenshots: []
	},
	{
		slug: 'api-chatgpt',
		color: '#5e95e3',
		description:
			'An API which uses the GPT-4o mini model to generate text based on the input. The api uses chatgpt from Openai.',
		shortDescription:
			'An API which uses the GPT-4o mini model to generate text based on the input. The api uses chatgpt from Openai.',
		links: [{ to: 'https://lueders.dev/gpt?q=hey', label: 'View project' }],
		logo: Assets.Default,
		name: 'ChatGPT API',
		period: {
			from: new Date("Jun 29, 2024"),
			to: new Date("Jun 30, 2024"),
		},
		skills: getSkills('rs'),
		type: 'API',
		screenshots: []
	},
	{
		slug: 'website-caddy-webserver-statistics-dashboard',
		color: '#5e95e3',
		description:
			'Caddy statistics dashboards allow administrators and visitors to view statistics and analytics based on web server logs. Powered by stunning charts, users are able to filter (e.g. time or website) and view statistics. The beautiful and custom developed website uses a high performance rust written backend to deliver the best possible user experience.',
		shortDescription:
			'Caddy statistics dashboards allow administrators and visitors to view statistics and analytics based on web server logs. Powered by stunning charts, users are able to filter and view statistics.',
		links: [{ to: 'https://lueders.dev/stats', label: 'View project' }],
		logo: Assets.Default,
		name: 'Caddy Statistics Dashboard',
		period: {
			from: new Date("Nov 29, 2023"),
			to: new Date("Jan 22, 2024"),
		},
		skills: getSkills('rs', 'sql', 'bootstrap', 'js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/caddy-statistics-dashboard.png'
			}
		]
	},
	{
		slug: 'website-toscana-image-gallery',
		color: '#5e95e3',
		description:
			'Toscana Album is a small project that presents photos and videos from a trip to Tuscany. The layout is simple and each image and video can be viewed through a nice javascript image gallery library (spotlight.js).',
		shortDescription:
			'Toscana Album is a small project that presents photos and videos from a trip to Tuscany.',
		links: [],
		logo: Assets.Default,
		name: 'Toscana Album',
		period: {
			from: new Date("Sep 26, 2023"),
			to: new Date("Oct 6, 2023"),
		},
		skills: getSkills('bootstrap', 'js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/toskana-album.png'
			}
		]
	},
	{
		slug: 'website-the-better-meal-plan',
		color: '#5e95e3',
		description:
			'The Better Meal Plan is a meal plan with a simple design built to easily display my employer and university meal plans. The site allows all users to easily navigate through all the cafeterias and view details for each meal. This was my first project in rust, which grew over time into a really nice service. Friends and colleagues enjoy this service every day.',
		shortDescription:
			'The Better Meal Plan is a meal plan with a simple design built to easily display my employer and university meal plans. You can easily navigate through all the cafeterias and view details for each meal. ',
		links: [],
		logo: Assets.Default,
		name: 'The Better Meal Plan',
		period: {
			from: new Date("Nov 9, 2022"),
			to: new Date("Apr 4, 2025"),
		},
		skills: getSkills('rs', 'sql', 'bootstrap', 'nextjs', 'shadcn'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/the-better-meal-plan-new-ui.png'
			}
		]
	},
	{
		slug: 'windows-app-canon-automation',
		color: '#5e95e3',
		description:
			'The C# WPF project automates photo and video management tasks with a connected camera, detecting its connection to copy files to designated folders on the hard drive and initiating Adobe Photo Converter. The program operates discreetly, starting in the system tray with a hidden window accessible through the tray menu for permanent closure or window display.',
		shortDescription:
			'The C# WPF project automates photo and video management tasks with a connected camera, detecting its connection to copy files to designated folders on the hard drive.',
		links: [{ to: 'https://github.com/M2K3K5/CanonAutomation', label: 'Github' }],
		logo: Assets.Default,
		name: 'Canon Automation',
		period: {
			from: new Date("Aug 14, 2022"),
			to: new Date("Aug 15, 2022"),
		},
		skills: getSkills('cs'),
		type: 'Desktop App'
	},
	{
		slug: 'website-caddy-log-analyzer-vuejs',
		color: '#5e95e3',
		description:
			'Caddy Log User Agent Analyzer is a small project where you can upload your own caddy log files and see what user agents visited your website. It will categorize them into types like user, bot or unknown.',
		shortDescription:
			'Caddy Log User Agent Analyzer is a small project where you can upload your own caddy log files and see what user agents visited your website. It will categorize them into users, bots or unknown.',
		links: [{ to: 'https://lueders.dev/caddy', label: 'View project' }],
		logo: Assets.Default,
		name: 'Caddy Log User Agent Analyzer',
		period: {
			from: new Date("Jun 10, 2022"),
			to: new Date("Jun 12, 2022"),
		},
		skills: getSkills('vue', 'js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/caddy-log-analyzer.png'
			}
		]
	},
	{
		slug: 'windows-app-spotify-stats',
		color: '#5e95e3',
		description:
			'The C# WPF project collects all the Spotify songs the user is listening to and allows to view and explore the full history. There is also a statistics page where you can see how much time you have listened in the current day, month and year.',
		shortDescription:
			'The C# WPF project collects all the Spotify songs the user is listening to and allows to view and explore the full history.',
		links: [],
		logo: Assets.Default,
		name: 'Spotify Stats',
		period: {
			from: new Date("Oct 21, 2021"),
			to: new Date("Jan 23, 2022"),
		},
		skills: getSkills('cs'),
		type: 'Desktop App',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/spotify-stats.png'
			}
		]
	},
	{
		slug: 'website-homepage-old',
		color: '#5e95e3',
		description:
			'Just my old homepage which contained a listing of all my projects',
		shortDescription:
			'Just my old homepage which contained a listing of all my projects',
		links: [{ to: 'https://lueders.dev/old', label: 'View project' }],
		logo: Assets.Default,
		name: 'Homepage (old)',
		period: {
			from: new Date("Sep 29, 2021"),
			to: new Date("Oct 5, 2021"),
		},
		skills: getSkills('php', 'js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/homepage-old.png'
			}
		]
	},
	{
		slug: 'website-robots',
		color: '#5e95e3',
		description:
			'Simplifies the scraping of this website for search engines',
		shortDescription:
			'Simplifies the scraping of this website for search engines',
		links: [{ to: 'https://lueders.dev/robots.txt', label: 'View project' }],
		logo: Assets.Default,
		name: 'Robots.txt and sitemap.xml',
		period: {
			from: new Date("Jul 12, 2021"),
			to: new Date("Jul 13, 2021"),
		},
		skills: getSkills('php'),
		type: 'Website'
	},
	{
		slug: 'website-error-creator',
		color: '#5e95e3',
		description:
			'Let your browser show http errors',
		shortDescription:
			'Let your browser show http errors',
		links: [{ to: 'https://lueders.dev/error/create', label: 'View project' }],
		logo: Assets.Default,
		name: 'Error Creator',
		period: {
			from: new Date("Jul 9, 2021"),
			to: new Date("Jul 10, 2021"),
		},
		skills: getSkills('php'),
		type: 'Website'
	},
	{
		slug: 'website-speedtest',
		color: '#5e95e3',
		description:
			'Measures your connection speed by downloading a nasa image',
		shortDescription:
			'Measures your connection speed by downloading a nasa image',
		links: [{ to: 'https://lueders.dev/speedtest', label: 'View project' }],
		logo: Assets.Default,
		name: 'Speedtest',
		period: {
			from: new Date("Jun 29, 2021"),
			to: new Date("Jun 30, 2021"),
		},
		skills: getSkills('js', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/speedtest-picture.png'
			}
		]
	},
	{
		slug: 'website-ip',
		color: '#5e95e3',
		description:
			'An IP-API which returns general data und identifies nord vpn users',
		shortDescription:
			'An IP-API which returns general data und identifies nord vpn users',
		links: [{ to: 'https://lueders.dev/ip/', label: 'View project' }],
		logo: Assets.Default,
		name: 'IP API',
		period: {
			from: new Date("Jun 26, 2021"),
			to: new Date("Jun 27, 2021"),
		},
		skills: getSkills('php'),
		type: 'API',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/ip-icon.png'
			}
		]
	},
	{
		slug: 'website-details',
		color: '#5e95e3',
		description:
			'Shows what websites can know about you',
		shortDescription:
			'Shows what websites can know about you',
		links: [{ to: 'https://lueders.dev/details', label: 'View project' }],
		logo: Assets.Default,
		name: 'Details',
		period: {
			from: new Date("Jun 24, 2021"),
			to: new Date("Jun 25, 2021"),
		},
		skills: getSkills('php', 'js', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/details-picture.png'
			}
		]
	},
	{
		slug: 'browser-extension-whatsapp-plus',
		color: '#5e95e3',
		description:
			'This extension has the ability to hide last messages in the chat list, conceal messages in open chats with content revealed on hover, receive Windows notifications upon disconnection from a mobile device, and an efficient emoji spamming functionality.',
		shortDescription:
			'The extension has the ability to hide last messages in the chat list, conceal messages in open chats with content revealed on hover and an efficient emoji spamming functionality.',
		links: [{ to: 'https://lueders.dev/whatsapp-plus', label: 'View project' }],
		logo: Assets.Default,
		name: 'Whatsapp Plus Extension',
		period: {
			from: new Date("Jun 15, 2021"),
			to: new Date("Jun 20, 2021"),
		},
		skills: getSkills('php', 'js', 'css', 'html'),
		type: 'Browser Extension',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/wa-plus.png'
			}
		]
	},
	{
		slug: 'website-discord-rickroll',
		color: '#5e95e3',
		description:
			'Shows a not loading image in discord but rickrolls you by visiting',
		shortDescription:
			'Shows a not loading image in discord but rickrolls you by visiting',
		links: [{ to: 'https://lueders.dev/unknown.png', label: 'View project' }],
		logo: Assets.Default,
		name: 'Discord Image Rickroll',
		period: {
			from: new Date("May 2, 2021"),
			to: new Date("May 3, 2021"),
		},
		skills: getSkills('php'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/discord_not_loading.png'
			}
		]
	},
	{
		slug: 'discord-bot-server-status',
		color: '#ff0000',
		description:
			'The Server Status Bot keeps you up to date on Discords server status. It enables many commands and also uses Discords brand new slash commands. The bot is always up to date and displays the current server incident status in its bot presence, making it easy to check the status. It has a simple use of commands made possible by Discords slash commands. They are easy and understandable to use and allow for a much more enjoyable way of using bots. (The bot can also be controlled by text messages on your server.) However, not only can current incidents be viewed, but all previous incidents and their information can be sent directly to your channel (incident link or id required).',
		shortDescription:
			'The Server Status Bot keeps you up to date on Discords server status. It enables many commands and also uses Discords slash commands.',
		links: [{ to: 'https://discord.com/oauth2/authorize?client_id=813142601565601793&permissions=84992&scope=applications.commands%20bot', label: 'Invite' }],
		logo: Assets.Default,
		name: 'Discord Bot Server Status',
		period: {
			from: new Date("Feb 10, 2021"),
			to: new Date("Feb 21, 2021"),
		},
		skills: getSkills('node'),
		type: 'Discord Bot',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/server status.png'
			}
		]
	},
	{
		slug: 'discord-bot-finanzfluss',
		color: '#0000ff',
		description:
			'The Finanzfluss Bot was meticulously crafted to enhance the communitys experience on Discord by offering a versatile tool for managing stock portfolios and  informed about the stock market. This sophisticated bot enables users to effortlessly create portfolios, explore others investment strategies, and receive time alerts for stocks experiencing significant intraday changes of more than 5%. Additionally, users can easily look up information on stocks, ETFs, and various assets, including their latest percentage changes over specific time intervals such as a week, month, or year. The bot provides an interactive feature for viewing charts and conveniently generates instant links to the latest news related to the selected asset. ',
		shortDescription:
			'The Finanzfluss Bot on Discord enhances user experience by offering a comprehensive suite of features, including portfolio management, real-time alerts for significant stock changes, asset information lookup with percentage changes over various timeframes, interactive charts, and instant links to the latest news.',
		links: [{ to: 'https://github.com/M2K3K5/finanzfluss-bot', label: 'GitHub' }],
		logo: Assets.Default,
		name: 'Discord Bot Finanzfluss',
		period: {
			from: new Date("Dec 15, 2020"),
			to: new Date("Jan 5, 2021"),
		},
		skills: getSkills('node'),
		type: 'Discord Bot',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/avatar-finanzfluss.jpg'
			}
		]
	},
	{
		slug: 'discord-bot-joker',
		color: '#00ff00',
		description:
			'The multi purpose Discord Bot JoKeR has over 90 administrative, api-based, funny, informative, and random commands. Many commands are also customizable. The bot has all standard commands, but of course also special ones like randominvites to servers, rejoinroles (on server rejoin the members get their old roles back), see deleted messages, get the "picture of the day" sent every day, twist words as well as return words in emojis, translate texts into languages, save messages of others by a reaction, check if a website is up and what its ping is and much more! Just try the help command and discover the bot ...',
		shortDescription:
			'The multi purpose Discord Bot JoKeR has over 90 administrative, api-based, funny, informative, and random commands. Many commands are also customizable.',
		links: [{ to: 'https://discord.com/oauth2/authorize?client_id=751117767712964679&scope=bot&permissions=1576660215', label: 'Invite' }],
		logo: Assets.Default,
		name: 'Discord Bot JoKeR',
		period: {
			from: new Date("Sep 21, 2020"),
			to: new Date("Nov 15, 2020"),
		},
		skills: getSkills('node'),
		type: 'Discord Bot',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/avatar-joker.png'
			}
		]
	},
	{
		slug: 'website-browser-windows',
		color: '#5e95e3',
		description:
			'A fun-website which looks like a Windows 10 uninstalling screen',
		shortDescription:
			'A fun-website which looks like a Windows 10 uninstalling screen',
		links: [{ to: 'https://lueders.dev/windows', label: 'View project' }],
		logo: Assets.Default,
		name: 'Windows 10 Uninstaller',
		period: {
			from: new Date("Sep 9, 2020"),
			to: new Date("Sep 10, 2020"),
		},
		skills: getSkills('js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/windows.png'
			}
		]
	},
	{
		slug: 'website-browser-emulator',
		color: '#5e95e3',
		description:
			'A website which handles and looks like a browser, but as a website.',
		shortDescription:
			'A website which handles and looks like a browser, but as a website.',
		links: [{ to: 'https://lueders.dev/browser', label: 'View project' }],
		logo: Assets.Default,
		name: 'Browser Emulator',
		period: {
			from: new Date("Jul 12, 2020"),
			to: new Date("Jul 13, 2020"),
		},
		skills: getSkills('js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/browser.png'
			}
		]
	},
	{
		slug: 'browser-extension-extension',
		color: '#5e95e3',
		description:
			'This feature-rich extension offers style customization with color escalation, dark mode, and random font color, social media enhancements for downloading/viewing content, miscellaneous options like searching text on social media, script disabling, translation, reading mode, and tab sync, as well as background features such as a YouTube adblocker, website analysis, automatic extension updates, and notifications for WhatsApp Web disconnection.',
		shortDescription:
			'This extension provides customizable styles, social media enhancements, miscellaneous options, and background features including a YouTube adblocker.',
		links: [{ to: 'https://lueders.dev/extension', label: 'View project' }],
		logo: Assets.Default,
		name: 'Browser Extension',
		period: {
			from: new Date("Jun 1, 2020"),
			to: new Date("Jun 18, 2020"),
		},
		skills: getSkills('php', 'js', 'css', 'html'),
		type: 'Browser Extension',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/extension.png'
			}
		]
	},
	{
		slug: 'website-moneyclicker',
		color: '#5e95e3',
		description:
			'My first browser game which is like cookie clicker. That was my first try coding javascript and php. You can also save your game progress online and log in again on another device. The game website also comes with an anti-cheat system.',
		shortDescription:
			'My first browser game which is like cookie clicker. That was my first try coding javascript.',
		links: [{ to: 'https://lueders.dev/moneyclicker', label: 'View project' }],
		logo: Assets.Default,
		name: 'Moneyclicker',
		period: {
			from: new Date("May 24, 2020"),
			to: new Date("Jul 20, 2020"),
		},
		skills: getSkills('php', 'js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/moneyclicker.png'
			}
		]
	},
	{
		slug: 'website-africa',
		color: '#5e95e3',
		description:
			'My first website with a few images from a africa trip',
		shortDescription:
			'My first website with a few images from a africa trip',
		links: [{ to: 'https://lueders.dev/afrika', label: 'View project' }],
		logo: Assets.Default,
		name: 'Africa',
		period: {
			from: new Date("Apr 20, 2020"),
			to: new Date("Apr 22, 2020"),
		},
		skills: getSkills('js', 'css', 'html'),
		type: 'Website',
		screenshots: [
			{
				label: 'Preview',
				src: 'https://lueders.dev/afrika.png'
			}
		]
	}
];

items.sort((a, b) => b.period.to.getTime() - a.period.to.getTime());

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;

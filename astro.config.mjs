import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Documentation Mr. Robøt",
			logo: {
				light: './src/assets/title_logo_light.svg',
				dark: './src/assets/title_logo_dark.svg',
				replacesTitle: true,
				alt: "Mr. Robøt Logo"
			},
			customCss: ['./src/assets/css/hello.css'],
			editLink: {
				baseUrl: 'https://github.com/Mist3r-Robot/docs.mrrobot.app/edit/main/docs/',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: {
				github: 'https://github.com/Mist3r-Robot/docs.mrrobot.app',
				twitter: 'https://twitter.com/MrRobotApp',
				discord: 'https://mrrobot.app/discord',
			},
			sidebar: [
				{ label: 'Introduction', link: '/introduction/' },

				{
					label: 'Commandes',
					items: [
						{ label: '/aide', link: '/commands/help' },

					],
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'Filtre contre les insultes', link: '/configuration/swear' },
					],
				},


			],
		}),
	],
});

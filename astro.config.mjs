import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FlowPilot',
			description: 'Unreal Engine Code Plugin: Simple, modular and extensible gameplay system that allows fast data-driven gameplay flow creation.',
			social: {
				github: 'https://github.com/mikea15/ueflowpilot',
				discord: 'https://discord.gg/sF9KjZ9qqj',
				twitter: 'https://twitter.com/michaeladaixo',
			},
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
			editLink: {
				baseUrl: 'https://github.com/Mikea15/UEFlowPilot/tree/main/',
			},
			sidebar: [
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Changelog', link: '/about/changelog/' },
					],
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			credits: true,
		}),
	],
});

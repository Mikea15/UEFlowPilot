import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://flowpilot.dev',
  integrations: [starlight({
    title: 'FlowPilot',
    description: 'Unreal Engine Code Plugin: Simple, modular and extensible gameplay system that allows fast data-driven gameplay flow creation.',
    logo: {
      src: './src/assets/fp_icon_256.jpg',
      replacesTitle: false,
    },
    customCss: [
      './src/tailwind.css'
    ],
    social: {
      github: 'https://github.com/mikea15/ueflowpilot',
      discord: 'https://discord.gg/sF9KjZ9qqj',
      twitter: 'https://twitter.com/michaeladaixo'
    },
    components: {
      Footer: './src/components/CustomFooter.astro',
    },
    editLink: {
      baseUrl: 'https://github.com/Mikea15/UEFlowPilot/tree/main/'
    },
    sidebar: [{
      label: 'About',
      items: [
      // Each item here is one entry in the navigation menu.
      { label: 'Intro',             link: '/about/intro/' }, 
      { label: 'Changelog',         link: '/about/changelog/' }, 
      { label: 'Roadmap',           link: '/about/roadmap/' }, 
      { label: 'Console Commands',  link: '/about/consolecommands/' }
    ]}, {
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    credits: true
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })]
});
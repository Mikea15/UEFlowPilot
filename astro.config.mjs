import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://flowpilot.dev',
  integrations: [starlight({
    title: 'FlowPilot',
    description: 'Powerful, efficient, and intuitive gameplay design for Unreal Engine developers.',
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
    tableOfContents: {
      maxHeadingLevel: 4
    },
    sidebar: [{
      label: 'About',
      items: [
      // Each item here is one entry in the navigation menu. 
      { label: 'Changelog',         link: '/about/changelog/' }, 
      { label: 'Roadmap',           link: '/about/roadmap/' }, 
      { label: 'Console Commands',  link: '/about/consolecommands/' }
    ]}, {
      label: 'Guides',
      items: [
        // Each item here is one entry in the navigation menu.
        { label: 'Introduction to FlowPilot', link: '/guides/introductiontoflowpilot/' }, 
        { label: 'New FlowPilot Assets', link: '/guides/newflowpilotassets/' }, 
        { label: 'FlowPilot Editor', link: '/guides/flowpiloteditor/' }, 
        { label: 'FlowPilot Editor Settings', link: '/guides/flowpiloteditorsettings/' }, 
        { label: 'FlowPilot Project Settings', link: '/guides/flowpilotprojectsettings/' }, 
        // { label: 'Fixing The Demo Level', link: '/guides/fixingthedemolevel/' }, 
      ]
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
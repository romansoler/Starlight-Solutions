// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
          starlight({
            title: 'Starlight Solutions',
            social: [
              {
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/withastro/starlight',
              },
            ],
            customCss: ['./src/styles/global.css'],
                  sidebar: [
                    { label: 'Home', slug: '' },
                    { label: 'Services', slug: 'services' },
                    { label: 'Pricing', slug: 'pricing' },
                    { label: 'Audit', slug: 'audit' },
                    {
                      label: 'Resources',
                      autogenerate: { directory: 'reference' },
                    },
                  ],
      }),
    ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});
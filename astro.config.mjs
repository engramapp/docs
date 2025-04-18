// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { sidebar } from './astro.sidebar';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: '',
      logo: {
          src: './src/assets/docslogo.png'
      },
      customCss: [
          './src/styles/docs.css',
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://help.engramapp.com/logo_banner_card.png',
          },
        },
        // You can add other global head elements here
      ],
      // sidebar,
      sidebar: [
          { label: 'Home', link: '/' },
          { label: 'Developer Policy', link: '/developer-policy' },
          {
              label: 'Themes',
              autogenerate: { directory: 'themes' },
          },
          {
              label: 'Plugins',
              autogenerate: { directory: 'plugins' },
              collapsed: true
          },
          {
              label: 'Reference',
              items: [
                  { label: 'Manifest', link: 'reference/manifest' },
                  { label: 'Versions', link: 'reference/versions' },
                  {
                      label: 'CSS',
                      items: [
                          'reference/css',
                          {
                              label: 'Foundations',
                              autogenerate: { directory: 'reference/css/foundations' },
                              collapsed: true
                          },
                          {
                              label: 'Components',
                              autogenerate: { directory: 'reference/css/components' },
                              collapsed: true
                          },
                          {
                              label: 'Views',
                              items: [
                                  'reference/css/views/review',
                                  'reference/css/views/stats',
                                  {
                                      label: 'Card Wizard',
                                      autogenerate: { directory: 'reference/css/views/wizard' },
                                      collapsed: true
                                  }
                              ],
                              collapsed: true
                          },
                          {
                              label: 'Window',
                              autogenerate: { directory: 'reference/css/window' },
                              collapsed: true
                          },
                      ],
                  },
                  {
                      label: 'TypeScript API',
                      items: [
                        'reference/api',
                      ],
                      collapsed: true
                  },
              ]
          },
      ],
  }), sitemap()],

  markdown: {
      rehypePlugins: [
          rehypeHeadingIds,
          [
              rehypeAutolinkHeadings,
              {
                // Wrap the heading text in a link.
                behavior: 'wrap',
              },
          ],
      ],
    },

  adapter: cloudflare(),
});
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://hillstackstudio.com',
  integrations: [react(), tailwind()],
  redirects: {
    '/pricing': '/#pricing',
    '/contact': '/#contact',
    '/recent-work': '/#recent-work',
    '/work': '/#recent-work',
    '/our-work': '/#recent-work',
    '/advantage': '/#advantage',
    '/faq': '/#faq',
    '/services/generative-engine-optimization': '/services',
    '/services/answer-engine-optimization': '/services',
    '/services/custom-web-design-development': '/services',
    '/accessiblity': '/accessibility'
  }
});

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'faq',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/commands',
        'getting-started/first-time-usage'
      ],
    },
    {
      type: 'category',
      label: 'Customization',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'config/config',
        'config/crate',
        'config/effects',
        'config/translating'
      ], 
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'reference/particles',
        'reference/sounds',
        'reference/enchantments',
        'reference/potions',
        'reference/variables',
        'reference/screenshots',
      ], 
    },
    'upgrade/2.0.X',
    {
      type: 'category',
      label: 'Extra (Extensions)',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'extra/npc',
      ],  
    },
    {
      type: 'category',
      label: 'API (For Developers)',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'api/introduction',
      ],  
    }
  ],
};

module.exports = sidebars;

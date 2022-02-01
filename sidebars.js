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
  sidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/getting-started',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started',
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'generated-index',
        title: 'Concepts',
        slug: '/concepts',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        slug: '/reference',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'reference',
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      link: {
        type: 'generated-index',
        title: 'Contributing',
        slug: '/contributing',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'contributing',
        },
      ],
    },
  ],
};

module.exports = sidebars;

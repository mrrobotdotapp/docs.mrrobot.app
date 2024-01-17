import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

const locales = {
  root: {
    label: 'Français',
    lang: 'fr',
  },
  en: {
    label: 'English',
    lang: 'en',
  }
}
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation Mr. Robøt",
      titleDelimiter: ' — ',
      logo: {
        light: './src/assets/title_logo_light.svg',
        dark: './src/assets/title_logo_dark.svg',
        replacesTitle: true,
        alt: "Mr. Robøt Logo"
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#311839',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'Documentation Mr. Robøt',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Documentation du robot Discord Mr. Robøt',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://docs.mrrobot.app/banner_seo.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: 'https://docs.mrrobot.app/banner_seo.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:url',
            content: 'https://docs.mrrobot.app',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        }
      ],
      customCss: ['./src/assets/css/hello.css'],
      editLink: {
        baseUrl: 'https://github.com/mrrobotdotapp/docs.mrrobot.app/edit/main/',
      },
      lastUpdated: true,
      defaultLocale: 'root',
      locales,
      social: {
        github: 'https://github.com/mrrobotdotapp/docs.mrrobot.app',
        twitter: 'https://twitter.com/MrRobotApp',
        discord: 'https://mrrobot.app/discord',
      },
      sidebar: [
        {
          label: 'Démarrage',
          translations: {
            en: 'Getting started',
          },
          autogenerate: {directory: 'getting-started'},
        },
        {
          label: 'Commandes utilitaires',
          translations: {
            en: 'Utility commands',
          },
          autogenerate: {directory: 'utility'},
        },
        {
          label: 'Commandes de modération',
          translations: {
            en: 'Moderation commands',
          },
          autogenerate: {directory: 'mod'},
        },
        {
          label: 'Configuration',
          autogenerate: {directory: 'configuration'},
          items: [
            /*{ label: 'Internationalization (i18n)', link: '/guides/i18n/' },*/
            {
              label: 'Filtre contre les insultes',

              autogenerate: {directory: 'configuration/swear'},
            },
          ],
        },

        {
          label: 'Liens utiles',
          translations: {
            en: 'Useful links',
          },
          items: [
            {
              label: 'Site web ↗',
              link: 'https://mrrobot.app',
              attrs: { target: '_blank' },
              translations: {
                en: 'Website ↗',
              }
            },
            {
              label: 'À propos ↗',
              link: 'https://mrrobot.app/about',
              attrs: { target: '_blank' },
              translations: {
                en: 'About ↗',
              }
            },
            {
              label: 'Serveur Discord ↗',
              link: 'https://mrrobot.app/discord',
              attrs: { target: '_blank' },
              translations: {
                en: 'Discord server ↗',
              }
            },
          ]
        }
      ],
    }),
  ],
});

import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import lunaria from '@lunariajs/starlight';
import matomo from 'astro-matomo';

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
      plugins: [
        lunaria(),
      ],
      components: {
        Header: "./src/components/Header.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
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
            property: 'twitter:site',
            content: '@MrRobotApp',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:creator',
            content: '@MrRobotApp',
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
        },
        {
          tag: 'link',
          attrs: {
            rel: 'monetization',
            href: 'https://ilp.uphold.com/ZrmQjNMeaZFJ',
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
          label: 'Système des logs',
          translations: {
            en: 'Logs system',
          },
          autogenerate: {directory: 'configuration/logs'},
        },
        {
          label: 'Filtre contre les insultes',
          translations: {
            en: 'Swear filter',
          },
          autogenerate: {directory: 'configuration/swear'},
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
          label: 'Liens utiles',
          collapsed: true,
          translations: {
            en: 'Useful links',
          },
          items: [
            {
              label: 'Site web ↗',
              link: 'https://mrrobot.app',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Website ↗',
              }
            },
            {
              label: 'À propos ↗',
              link: 'https://mrrobot.app/about',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'About ↗',
              }
            },
            {
              label: 'Changelogs ↗',
              link: 'https://mrrobot.app/changelog',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Changelogs ↗',
              }
            },
            {
              label: 'Serveur Discord ↗',
              link: 'https://mrrobot.app/discord',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Discord server ↗',
              }
            },
            {
              label: 'Contacter par e-mail ↗',
              link: 'https://tally.so/r/3NyOlm',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Contact us by e-mail ↗',
              }
            },
          ]
        },
        {
          label: 'Légal',
          collapsed: true,
          translations: {
            en: 'Legal',
          },
          items: [
            {
              label: 'Mentions légales ↗',
              link: 'https://mrrobot.app/mentions',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Legals Mentions ↗',
              }
            },
            {
              label: 'Politique de confidentialité ↗',
              link: 'https://mrrobot.app/privacy',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Privacy ↗',
              }
            },
            {
              label: 'Conditions d\'utilisation ↗',
              link: 'https://mrrobot.app/terms',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Terms of use ↗',
              }
            },
            {
              label: 'Conditions générales de vente ↗',
              link: 'https://mrrobot.app/cgv',
              attrs: {target: '_blank', rel: "noreferrer noopener"},
              translations: {
                en: 'Terms of sale ↗',
              }
            }
          ]
        }
      ],
    }),
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      host: "https://analytics.thomasbnt.dev/",
      setCookieDomain: "*.mrrobot.app",
      trackerUrl: "js/", // defaults to matomo.php
      srcUrl: "js/", // defaults to matomo.js
      siteId: 1,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: false,
    }),
  ],
  redirects: {
    '/logs': '/configuration/logs'
  }
});

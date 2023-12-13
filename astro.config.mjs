import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation Mr. Robøt",
      logo: {
        light: './src/assets/title_logo_light.svg',
        dark: './src/assets/title_logo_dark.svg',
        replacesTitle: true,
        alt: "Mr. Robøt Logo"
      },
      customCss: ['./src/assets/css/hello.css'],
      editLink: {
        baseUrl: 'https://github.com/Mist3r-Robot/docs.mrrobot.app/edit/main/',
      },
      lastUpdated: true,
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      social: {
        github: 'https://github.com/Mist3r-Robot/docs.mrrobot.app',
        twitter: 'https://twitter.com/MrRobotApp',
        discord: 'https://mrrobot.app/discord',
      },
      sidebar: [
        {
          label: 'Introduction',
          link: '/introduction/',
          translations: {
            en: 'Introduction',
          }
        },
        {
          label: 'Commandes utilitaires',
          translations: {
            en: 'Utility commands',
          },
          items: [
            {
              label: '/aide',
              link: '/utility/help',
              translations: {
                en: '/help',
              }
            },
            {
              label: '/whois',
              link: '/utility/whois',
              translations: {
                en: '/whois',
              }
            },
            {
              label: '/serveur',
              link: '/utility/server',
              translations: {
                en: '/server',
              }
            },
            {
              label: '_sondage',
              link: '/utility/survey',
              translations: {
                en: '_survey',
              }
            },
          ],
        },
        {
          label: 'Commandes de modération',
          translations: {
            en: 'Moderation commands',
          },
          items: [
            {
              label: '/clear',
              link: '/mod/clear',
              translations: {
                en: '/clear',
              }
            },
            {
              label: '/banid',
              link: '/mod/banid',
              translations: {
                en: '/banid',
              }
            },
          ],
        },
        {
          label: 'Configuration',
          items: [
            {
              label: 'Filtre contre les insultes',
              link: '/configuration/swear',
              translations: {
                en: 'Swear filter',
              }
            },
          ],
        },


      ],
    }),
  ],
});

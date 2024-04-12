[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Netlify Status](https://api.netlify.com/api/v1/badges/00487308-4ca7-4d14-89eb-df9691bd5030/deploy-status)](https://app.netlify.com/sites/docsmrrobotapp/deploys)

[![Documentation of Mr. Robøt](docs/title.svg#gh-light-mode-only)](https://docs.mrrobot.app)
[![Documentation of Mr. Robøt](docs/title-dark.svg#gh-dark-mode-only)](https://docs.mrrobot.app)

> [!NOTE]
> [→ SEE THE DOCUMENTATION](https://docs.mrrobot.app/)

For running locally, you'll need [Node.js](https://nodejs.org/en/) installed.
```
yarn run dev
```

## 🚀 Project Structure

Inside your Starlight project, you'll see the following folders and files:

```
.
├── public
│  └── favicon.svg
├── src
│  ├── assets
│  │  ├── banner_seo.png
│  │  ├── css
│  │  │  └── hello.css
│  │  ├── favicon.png
│  │  ├── title_logo_dark.svg
│  │  └── title_logo_light.svg
│  ├── content
│  │  ├── config.ts
│  │  └── docs
│  │      ├── 404.mdx
│  │      ├── configuration
│  │      │  └── swear.mdx
│  │      ├── en
│  │      │  ├── index.mdx
│  │      │  └── introduction.mdx
│  │      ├── index.mdx
│  │      ├── introduction.mdx
│  │      ├── mod
│  │      │  ├── banid.mdx
│  │      │  └── clear.mdx
│  │      └── utility
│  │          ├── help.mdx
│  │          ├── server.mdx
│  │          ├── survey.mdx
│  │          └── whois.mdx
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 📝 Editing Content

To edit the content of your site, simply edit the `.md` or `.mdx` files in `src/content/docs/`. You can add new files or directories to create new pages. You can also edit the `src/content/config.ts` file to change the site title, description, and navigation links.

## Internationalization

> [!TIP]
> If you want to see the progress of the international coalition on a single page
> 
> [→ Click here to see the dashboard i18n](https://docs.mrrobot.app/lunaria/)

Starlight supports internationalization out of the box. To add a new language, create a new directory in `src/content/` with the [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, `en` for English or `fr` for French.
Then, add a new entry to the `locales` object in `src/content/config.ts`:

```diff
locales: {
    root: {
        label: 'Français',
            lang: 'fr',
    },
+    en: {
+        label: 'English',
+            lang: 'en',
+    },
},
```

You must also edit the `astro.config.mjs` file to add sidebar links for the new language:

```diff

sidebar: [
        {
          label: 'Introduction',
          link: '/introduction/',
          translations: {
+            en: 'Introduction',
          }
        },
    ]
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

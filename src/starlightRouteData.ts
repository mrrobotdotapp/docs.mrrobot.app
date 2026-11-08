import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

/**
 * Aperçu Discord enrichi (« component embed ») pour chaque page.
 * Les balises Open Graph restent le repli : Discord n'affiche l'embed
 * que si le payload est valide.
 *
 * Contraintes Discord à respecter (un seul écart invalide tout le payload) :
 * racine = Container (17), types autorisés seulement, boutons en style lien
 * (5) sans clé en plus (pas d'`id` ni de `custom_id`).
 * Spec : https://docs.discord.com/developers/link-previews/component-embeds
 * Test : https://discord.com/developers/embeds (ajouter `?v=2` pour contourner le cache).
 */
const ACCENT_COLOR = parseInt("fab0c6", 16);
const BANNER = "https://docs.mrrobot.app/banner_seo.png";

// Discord rend du markdown : on neutralise les crochets du titre pour le lien.
const escapeLinkText = (text: string) => text.replace(/([[\]\\])/g, "\\$1");

export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;
  const { entry, lang, head } = starlightRoute;

  if (entry.id === "404") return;

  const isFrench = lang === "fr";
  const site = context.site ?? context.url;
  const pageUrl = new URL(context.url.pathname, site).href;
  const homeUrl = new URL(isFrench ? "/" : `/${lang}/`, site).href;

  const title = escapeLinkText(entry.data.title);
  const description = entry.data.description?.trim();

  const payload = {
    component: {
      type: 17,
      accent_color: ACCENT_COLOR,
      components: [
        {
          type: 10,
          content: `# [${title}](${pageUrl})` + (description ? `\n${description}` : ""),
        },
        { type: 12, items: [{ media: { url: BANNER } }] },
        {
          type: 1,
          components: [
            { type: 2, style: 5, label: isFrench ? "Lire la page" : "Read the page", url: pageUrl },
            { type: 2, style: 5, label: "Documentation", url: homeUrl },
          ],
        },
      ],
    },
  };

  head.push({
    tag: "script",
    attrs: { id: "discord:component-embed", type: "application/json" },
    // `<` échappé : le JSON ne peut pas fermer la balise <script> par accident.
    content: JSON.stringify(payload).replace(/</g, "\\u003c"),
  });
});

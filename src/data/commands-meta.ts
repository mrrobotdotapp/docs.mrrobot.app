/**
 * Métadonnées éditoriales des commandes, indexées par le nom brut renvoyé
 * par l'API Discord (clé `name`, pas la traduction). Une sous-commande
 * s'écrit `parent sous-commande`.
 *
 * Une commande absente de cette table est quand même affichée, dans la
 * catégorie « Autres », sans lien : rien ne casse après un rafraîchissement
 * de `discord-commands.json`.
 */
export type CategoryId = "moderation" | "utility" | "settings" | "context" | "other";

export interface CommandMeta {
  category: CategoryId;
  href?: string;
}

export const categories: { id: CategoryId; label: string; description: string }[] = [
  {
    id: "moderation",
    label: "Modération",
    description: "Réservées à l'équipe de modération du serveur.",
  },
  {
    id: "utility",
    label: "Utilitaires",
    description: "Disponibles pour les membres, sauf mention contraire.",
  },
  {
    id: "settings",
    label: "Configuration",
    description: "Sous-commandes de `/paramètres`, pour configurer le robot sur le serveur.",
  },
  {
    id: "context",
    label: "Menus contextuels",
    description: "Accessibles par un clic droit sur un message ou un membre, puis `Applications`.",
  },
  { id: "other", label: "Autres", description: "" },
];

export const commandMeta: Record<string, CommandMeta> = {
  // Modération
  banid: { category: "moderation", href: "/mod/banid/" },
  clear: { category: "moderation", href: "/mod/clear/" },
  sanctions: { category: "moderation", href: "/mod/sanctions/" },
  roles: { category: "moderation", href: "/mod/roles/" },
  statistiques: { category: "moderation", href: "/mod/statistiques/" },
  urgence: { category: "moderation", href: "/configuration/urgence/" },
  avertissement: { category: "moderation", href: "/mod/avertissement/" },
  ping: { category: "moderation" },

  // Utilitaires
  aide: { category: "utility", href: "/utility/help/" },
  serveur: { category: "utility", href: "/utility/server/" },
  bienvenue: { category: "utility", href: "/utility/welcome/" },
  annonce: { category: "utility", href: "/utility/announce/" },
  signaler: { category: "utility", href: "/utility/signaler/" },
  profil: { category: "utility", href: "/utility/profil/" },
  rappel: { category: "utility", href: "/utility/rappel/" },
  whois: { category: "utility", href: "/utility/whois/" },

  // Configuration (`/paramètres …`)
  "paramètres antispam": { category: "settings", href: "/configuration/antispam/" },
  "paramètres apparence": { category: "settings", href: "/utility/appearance/" },
  "paramètres automod": { category: "settings", href: "/configuration/automod/" },
  "paramètres ciblage": { category: "settings", href: "/configuration/ciblage/" },
  "paramètres honeypot": { category: "settings", href: "/configuration/honeypot/" },
  "paramètres insultes": { category: "settings", href: "/configuration/swear/config-filter/" },
  "paramètres logs": { category: "settings", href: "/configuration/logs/" },
  "paramètres rôles": { category: "settings", href: "/configuration/roles/" },
  "paramètres signalement": { category: "settings", href: "/utility/signaler/" },
  "paramètres urgence": { category: "settings", href: "/configuration/urgence/" },
  "paramètres avertissements": { category: "settings", href: "/configuration/avertissements/" },

  // Menus contextuels
  "Signaler le message": { category: "context", href: "/utility/signaler/" },
  "Plus sur son profil": { category: "context", href: "/utility/profil/" },
};

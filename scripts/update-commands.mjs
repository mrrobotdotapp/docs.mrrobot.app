// Rafraîchit src/data/discord-commands.json depuis l'API Discord (écrase le fichier).
// Usage : yarn commands:update
// Le token est lu dans DISCORD_BOT_TOKEN, définie dans .env (voir .env.example)
// ou directement dans l'environnement.
import { writeFile } from "node:fs/promises";

const APPLICATION_ID = "308655472452304896";
const OUTPUT = new URL("../src/data/discord-commands.json", import.meta.url);

const token = process.env.DISCORD_BOT_TOKEN?.trim();
if (!token) {
  console.error("DISCORD_BOT_TOKEN manquant : renseignez-le dans .env (voir .env.example).");
  process.exit(1);
}

const response = await fetch(
  `https://discord.com/api/v10/applications/${APPLICATION_ID}/commands?with_localizations=true`,
  { headers: { Authorization: `Bot ${token}` } },
);
if (!response.ok) {
  console.error(`Discord a répondu ${response.status} ${response.statusText}`);
  process.exit(1);
}

const commands = await response.json();
if (!Array.isArray(commands) || commands.length === 0) {
  console.error("Réponse inattendue ou vide, le fichier n'a pas été modifié.");
  process.exit(1);
}

await writeFile(OUTPUT, JSON.stringify(commands, null, 2) + "\n");
console.log(`${commands.length} commandes enregistrées dans src/data/discord-commands.json`);

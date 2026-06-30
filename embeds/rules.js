const { EmbedBuilder } = require("discord.js");

module.exports = new EmbedBuilder()
    .setColor("#F7A8C9")
    .setTitle("📜 MoonSai Rules")
    .setDescription(`
> ✿ Добро пожаловать в **MoonSai 桜**

━━━━━━━━━━━━━━━━━━━━━━

🌸 Мы создаём спокойное и красивое комьюнити  
где каждый может чувствовать себя комфортно.

━━━━━━━━━━━━━━━━━━━━━━

🤝 **Respect Everyone**
Не оскорбляй участников и будь вежлив.

⚔️ **Fair Play**
Без читов, багов и нечестной игры.

💬 **No Toxic**
Никакой агрессии, флейма и провокаций.

🧭 **Use Channels Properly**
Пиши в нужных каналах.

📖 **Discord ToS**
Соблюдай правила Discord.

━━━━━━━━━━━━━━━━━━━━━━

🌙 *MoonSai — это стиль, атмосфера и уважение.*
`)
    .setFooter({
        text: "MoonSai 桜 • Community Rules"
    });
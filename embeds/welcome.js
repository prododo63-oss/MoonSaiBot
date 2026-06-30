const { EmbedBuilder } = require("discord.js");

module.exports = new EmbedBuilder()
    .setColor("#F7A8C9")
    .setTitle("🌸 MoonSai 桜")
    .setDescription(`
🌙 **Ты вошёл в сообщество MoonSai**

> где стиль, атмосфера и комфорт — главное.

━━━━━━━━━━━━━━━━━━━━━━

📜 **Правила**
Ознакомься с правилами сервера

🧭 **Навигация**
Изучи каналы и разделы

🎭 **Роли**
Выбери свою роль через систему

💬 **Общение**
Присоединяйся к комьюнити и общайся

━━━━━━━━━━━━━━━━━━━━━━

🌸 Добро пожаловать в MoonSai
`)
    .setFooter({
        text: "MoonSai 桜 • Welcome System"
    })
    .setTimestamp();
const { EmbedBuilder } = require("discord.js");

module.exports = new EmbedBuilder()
    .setColor("#F7A8C9")
    .setTitle("🧭 MoonSai Navigation")
    .setDescription(`
🌸 **Добро пожаловать в навигацию MoonSai**

━━━━━━━━━━━━━━━━━━━━━━

📌 **Основные каналы**

🌸・welcome  
→ Приветствие новых участников

📜・rules  
→ Правила сервера

📣・announcements  
→ Новости и обновления

🎭・roles  
→ Выбор ролей

━━━━━━━━━━━━━━━━━━━━━━

💬 **Чаты**

💬・general  
→ Общение

🎮・gaming  
→ Игры

📸・media  
→ Контент

🎫・support  
→ Поддержка

━━━━━━━━━━━━━━━━━━━━━━

🌙 *Навигация создана для удобства и атмосферы MoonSai*
`)
    .setFooter({
        text: "MoonSai 桜 • Navigation System"
    });
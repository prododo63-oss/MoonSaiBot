const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,

    async execute(member) {

        // 🌸 WELCOME MESSAGE
        const welcomeChannel = member.guild.channels.cache.find(
            c => c.name === "🌸・welcome"
        );

        if (welcomeChannel) {
            welcomeChannel.send({
                content: `🌸 Добро пожаловать ${member} в **MoonSai 桜**!`
            });
        } else {
            console.log("❌ Welcome channel not found");
        }

        // 📣 ANNOUNCEMENTS (лог новых участников)
        const logChannel = member.guild.channels.cache.find(
            c => c.name === "📣・announcements"
        );

        if (logChannel) {
            logChannel.send({
                content: `📣 Новый участник: **${member.user.tag}** | Сейчас нас: ${member.guild.memberCount}`
            });
        } else {
            console.log("❌ Announcements channel not found");
        }

        // 🎭 AUTO ROLE (Shadow)
        const role = member.guild.roles.cache.find(
            r => r.name === "影 | Shadow"
        );

        if (!role) {
            console.log("❌ Shadow role not found");
            return;
        }

        try {
            await member.roles.add(role);
        } catch (err) {
            console.error("❌ Error giving Shadow role:", err);
        }
    }
};
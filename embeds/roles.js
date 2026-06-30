const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,

    async execute(member) {

        const roleName = "影 | Shadow";

        const role = member.guild.roles.cache.find(r => r.name === roleName);

        if (!role) {
            console.log("❌ Role not found:", roleName);
            return;
        }

        try {
            await member.roles.add(role);
            console.log(`✅ Shadow role given to ${member.user.tag}`);
        } catch (err) {
            console.error("❌ Error giving role:", err);
        }
    }
};
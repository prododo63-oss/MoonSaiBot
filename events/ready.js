const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,

    execute(client) {
        console.log(`🌸 ${client.user.tag} запущен!`);
        client.user.setActivity("MoonSai 桜", {
            type: 3 // Watching
        });
    }
};
const { Events, EmbedBuilder } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction, client) {

        // 💬 COMMANDS
        if (interaction.isChatInputCommand()) {

            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (err) {
                console.error("COMMAND ERROR:", err);

                if (!interaction.replied) {
                    await interaction.reply({
                        content: "❌ Ошибка команды",
                        ephemeral: true
                    });
                }
            }
        }

        // 🎛 BUTTONS
        if (interaction.isButton()) {

            try {

                // 📜 RULES
                if (interaction.customId === "btn_rules") {
                    return interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("#F7A8C9")
                                .setTitle("📜 Rules")
                                .setDescription("MoonSai Rules")
                        ],
                        ephemeral: true
                    });
                }

                // 🧭 NAVIGATION
                if (interaction.customId === "btn_nav") {
                    return interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("#F7A8C9")
                                .setTitle("🧭 Navigation")
                                .setDescription("MoonSai Navigation")
                        ],
                        ephemeral: true
                    });
                }

                // 🎭 SHADOW ROLE ONLY
                if (interaction.customId === "btn_roles") {

                    const roleName = "影 | Shadow";

                    const role = interaction.guild.roles.cache.find(r => r.name === roleName);
                    if (!role) {
                        return interaction.reply({
                            content: "❌ Shadow роль не найдена",
                            ephemeral: true
                        });
                    }

                    const member = interaction.member;

                    // toggle
                    if (member.roles.cache.has(role.id)) {
                        await member.roles.remove(role);

                        return interaction.reply({
                            content: "❌ Shadow роль убрана",
                            ephemeral: true
                        });
                    } else {
                        await member.roles.add(role);

                        return interaction.reply({
                            content: "✅ Shadow роль выдана",
                            ephemeral: true
                        });
                    }
                }

            } catch (err) {
                console.error("BUTTON ERROR:", err);
            }
        }
    }
};
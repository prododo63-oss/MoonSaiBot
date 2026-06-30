const { SlashCommandBuilder } = require("discord.js");

const welcome = require("../embeds/welcome");
const rules = require("../embeds/rules");
const navigation = require("../embeds/navigation");

const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Создать оформление MoonSai"),

    async execute(interaction) {

        // 🔒 ЗАЩИТА (только админ)
        if (!interaction.member.permissions.has("Administrator")) {
            return interaction.reply({
                content: "❌ У тебя нет прав использовать /setup",
                ephemeral: true
            });
        }

        // 💥 СНАЧАЛА ОТВЕТ (важно для Discord)
        await interaction.deferReply({ ephemeral: true });

        try {

            // 🌸 WELCOME
            await interaction.channel.send({
                embeds: [welcome],
                files: ["./assets/banner.png"]
            });

            // 📜 RULES
            await interaction.channel.send({
                embeds: [rules]
            });

            // 🧭 NAVIGATION
            await interaction.channel.send({
                embeds: [navigation]
            });

            // 🎛 PANEL BUTTONS
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("btn_rules")
                        .setLabel("📜 Rules")
                        .setStyle(ButtonStyle.Secondary),

                    new ButtonBuilder()
                        .setCustomId("btn_nav")
                        .setLabel("🧭 Navigation")
                        .setStyle(ButtonStyle.Secondary),

                    new ButtonBuilder()
                        .setCustomId("btn_roles")
                        .setLabel("🎭 Roles (Shadow)")
                        .setStyle(ButtonStyle.Primary)
                );

            // 🌸 PANEL MESSAGE
            await interaction.channel.send({
                content: "🌸 **MoonSai Panel**",
                components: [row]
            });

            // ✅ DONE
            await interaction.editReply("✅ Setup успешно создан!");

        } catch (err) {
            console.error("SETUP ERROR:", err);
            await interaction.editReply("❌ Ошибка при выполнении setup");
        }
    }
};
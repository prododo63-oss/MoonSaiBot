require("dotenv").config();

const fs = require("fs");
const path = require("path");
const express = require("express");
const { Client, Collection, GatewayIntentBits } = require("discord.js");

// =========================
// 🌐 FAKE SERVER (FIX FOR RENDER)
// =========================
const app = express();

app.get("/", (req, res) => {
    res.send("🌸 MoonSai Bot is alive");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("🌐 Web server running on port", PORT);
});


// =========================
// 🤖 DISCORD CLIENT
// =========================
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();


// =========================
// 📦 COMMANDS LOADER
// =========================
const commandsPath = path.join(__dirname, "commands");

if (fs.existsSync(commandsPath)) {
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));

        if (command.data && command.execute) {
            client.commands.set(command.data.name, command);
        }
    }
}


// =========================
// ⚡ EVENTS LOADER
// =========================
const eventsPath = path.join(__dirname, "events");

if (fs.existsSync(eventsPath)) {
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

    for (const file of eventFiles) {
        const event = require(path.join(eventsPath, file));

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
}


// =========================
// 🟢 READY EVENT
// =========================
client.once("ready", () => {
    console.log(`🌸 MoonSai Bot#0128 запущен!`);
});


// =========================
// 🔐 LOGIN
// =========================
client.login(process.env.TOKEN);

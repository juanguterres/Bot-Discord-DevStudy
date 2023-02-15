const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Som para seu Estudo!"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/2ui7nVDDOnKHNunolJaIx8?si=8790e4a618a440e5")
    }
}
const { SlashCommandBuilder } = require ('discord.js')

function returnRandomNumber() {
    const randomInt = Math.floor(Math.random() * 101);
    return String(randomInt);
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Returns 0 - 100'),
        async execute(interaction) {
            const getRandom = returnRandomNumber()
            await interaction.reply(getRandom)
        },
};
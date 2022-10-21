var { googleImage } = require ('@bochilteam/scraper')
var handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
var res = await googleImage(text)
var image = res.getRandom()
var link = image
conn.sendButtonImg(m.chat, image, `🔎 *Result From:* ${text}
🌎 *Search:* Google
`, author, '🔄 NEXT 🔄', `/imagen ${text}`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
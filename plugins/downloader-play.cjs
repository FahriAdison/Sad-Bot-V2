var { youtubeSearch } = require ('@bochilteam/scraper')
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  var vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  var { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  var url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `.trim(), author, thumbnail + '.png', url, '📺Go To Youtube!', null, null, [
    ['Audio 🎧', `${usedPrefix}getaud ${url} yes`],
    ['Video 🎥', `${usedPrefix}ytv ${url} yes`],
    ['Youtube Search🔎', `${usedPrefix}yts ${url}`]
  ], m, { viewOnce: true })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = false

module.exports = handler

var fetch = require ('node-fetch')
var { youtubeSearch } = require ('@bochilteam/scraper')

var handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Input Query'
  var vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  var { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  var url = 'https://www.youtube.com/watch?v=' + videoId
  var ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  var capt = `*Title:* ${title}\n*Published:* ${publishedTime}\n*Duration:* ${durationH}\n*Views:* ${viewH}\n*Url:* ${url}`
  // var buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}ytv ${url}` }]
  var msg = await conn.sendButton(m.chat, capt, '_Audio on progress..._', thumbnail, ['Video',  `${usedPrefix}ytv ${url}`], m) 
 // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}
handler.help = handler.alias = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i
handler.exp = 0

module.exports = handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  var res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
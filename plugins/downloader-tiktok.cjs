var { tiktokdl } = require ('@bochilteam/scraper')
var wm = '                「 ꜱᴀᴅ BOT あ⁩ 」'
var handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    var { author: { nickname }, video, description } = await tiktokdl(args[0])
    var url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `*TIKTOK DOWNLOADER*
*Nickname:* ${nickname}
*Description:* ${description}

${wm}
`.trim(), m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

module.exports = handler
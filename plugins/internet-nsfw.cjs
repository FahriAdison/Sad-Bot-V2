var fetch = require('node-fetch')
var { extractImageThumb } = require('@adiwajshing/baileys')

var handler = async (m, { conn, args }) => {
	var code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply('_In progress, please wait..._')
	var res = await fetch('https://mxmxk.herokuapp.com/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	var json = await res.json()
	var v = await fetch('https://mxmxk.herokuapp.com/nhentai/' + code)
	var json2 = await v.json()
	var buffer = await (await fetch(json.result.images.pages[0])).buffer()
	var jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: json2.result }, jpegThumbnail, fileName: json.result.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = handler.alias = ['nhpdf']
handler.tags = ['internet']
handler.command = /^(nhpdf)$/i
handler.limit = true
module.exports = handler
// 🐰 MADE BY KORONEOFC (JANGAN DIHAPUS !!!)

var obs = require ('obfuscator')

var handler = async (m, { conn, text }) => {
	if (!text) throw 'Mana text nya?'
	var enc = await obs.utils.hex(text)
	m.reply(enc)
}
handler.help = ['enc', 'encrypt'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(enc(rypt)?)$/i

module.exports = handler

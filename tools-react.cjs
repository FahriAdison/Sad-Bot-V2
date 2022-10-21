var { proto } = require ('@adiwajshing/baileys')

var handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'React?'
  var q = m.quoted ? await m.getQuotedObj() : m
  conn.relayMessage(m.chat, { reactionMessage: proto.ReactionMessage.create({ key: q.key, text: args[0] }) }, { messageId: q.key.id })
}
handler.help = ['react']
handler.tags = ['tools']
handler.command = /^(react)$/i

module.exports = handler

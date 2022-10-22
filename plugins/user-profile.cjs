var PhoneNumber = require ('awesome-phonenumber')
var moment = require ('moment-timezone')

var handler = async (m, { conn, usedPrefix }) => {
  var who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  var { status, setAt } = await conn.fetchStatus(who).catch(() => {
          return {
            status: "",
            setAt: "",
          };
        });
   var pp
  try {
    pp = await conn.profilePictureUrl(who, "image")
  } catch (e) {
    pp = "https://telegra.ph/file/e47d9ec693e5288ad9382.jpg"
  } finally {
    var username = conn.getName(who)
    var str = `
• Name: ${username}, \n• Tag: @${who.replace(/@.+/, '')}, ${status ? '\n• Bio: ' + status : ''}, \n• Set At Bio: ${(setAt && moment(setAt).format("DD MMMM YYYY")) || "Unknown"}, \n• Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')},\n• Link: https://wa.me/${who.split`@`[0]}`.trim()

    var mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^(profile)$/i
handler.group = true

module.exports = handler

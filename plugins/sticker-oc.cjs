var fetch = require("node-fetch")
var { sticker } = require('../lib/sticker.cjs')
var { MessageType } = require('@adiwajshing/baileys')

var handler = async(m, { conn }) => {
try {
  let name = await conn.getName(m.sender)
  var imagen = 'https://telegra.ph/file/eb0dbb9f29ded8ab87395.png'
  let res = await `https://api.memegen.link/images/custom/sedang_melihat_${name}_coli/gw_laporin_ke_bapak_lu.jpg?background=https%3A%2F%2Ftelegra.ph%2Ffile%2Fbbb876605dbdd2a8ed0c4.png&watermark=memecomplete.com&token=khj7yfpkw8idaztccuys`
  var stiker = await sticker(null, res, global.packname, global.author)
  var stiker2 = await sticker(null, imagen, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
 } catch (e) {
   conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  }
 }
handler.customPrefix = /^(ahh|ngocok|coli|enak cuy|ahh)$/i
handler.command = new RegExp

module.exports = handler
var{ 
    youtubedl,
    youtubedlv2 
} = require ('@bochilteam/scraper')

var handler = async (m, { conn, args, isPrems, isOwner }) => {


  var q = '128kbps'
  var v = args[0]


// cina
var yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
var dl_url = await yt.audio[q].download()
  var ttl = await yt.title
var size = await yt.audio[q].fileSizeH
  
 await m.reply(`▢ Jᴜᴅᴜʟ: ${ttl}
▢  Uᴋᴜʀᴀɴ: ${size}

▢ Lᴏᴀᴅɪɴɢ....Mᴏʜᴏɴ Tᴜɴɢɢᴜ Bᴇʙᴇʀᴀᴘᴀ Sᴀᴀᴛ`)
  await conn.sendFile(m.chat, dl_url, ttl + '.mp3', wm, m, null, {
    asDocument: false
  })
}


handler.command = /^(getaud)$/i
module.exports = handler
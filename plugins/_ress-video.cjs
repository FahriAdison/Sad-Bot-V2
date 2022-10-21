var { 
    youtubedl,
    youtubedlv2 
} = require ('@bochilteam/scraper')

var handler = async (m, { conn, args, isPrems, isOwner }) => {

var qu = args[1] || '360'
  var q = qu + 'p'
  var v = args[0]

  var _thumb = {}
    try { _thumb = { jpegThumbnail: thumb2 } }
    catch (e) { }

// cina
var yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
var dl_url = await yt.video[q].download()
  var ttl = await yt.title
var size = await yt.video[q].fileSizeH
  
 await m.reply(`▢ Jᴜᴅᴜʟ: ${ttl}
▢  Uᴋᴜʀᴀɴ​: ${size}

▢ Lᴏᴀᴅɪɴɢ....Mᴏʜᴏɴ Tᴜɴɢɢᴜ Bᴇʙᴇʀᴀᴘᴀ Sᴀᴀᴛ​`)
  await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'video']: { url: dl_url }, fileName: `${wm}.mp4`, mimetype: 'video/mp4' }, { quoted: m })
}


handler.command = /^(getvid)$/i
module.exports = handler
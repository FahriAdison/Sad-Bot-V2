// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


var jimp = require ("jimp")
var uploadImage = require ("../lib/uploadImage.cjs")
var uploadFile = require ("../lib/uploadFile.cjs")

var handler = async (m, { conn, usedPrefix, args}) => {
	var towidth = args[0]
	var toheight = args[1]
	if (!towidth) throw 'size width?'
	if (!toheight) throw 'size height?'
	
var q = m.quoted ? m.quoted : m
var mime = (q.msg || q).mimetype || ''
if (!mime) throw "where the media?"

var media = await q.download()
var isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Mime ${mime} tidak didukung`
var link = await (isMedia ? uploadImage : uploadImage)(media)

var source = await jimp.read(await link)
var size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
var compres = await conn.resize(link, towidth - 0, toheight - 0)
var linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*${htki} COMPRESS RESIZE ${htka}*

*• BEFORE*
> ᴡɪᴅᴛʜ : ${size.before.width}
> ʜᴇɪɢʜᴛ : ${size.before.height}

*• AFTER*
> ᴡɪᴅᴛʜ : ${size.after.width}
> ʜᴇɪɢʜᴛ : ${size.after.height}

*• LINK*
> ᴏʀɪɢɪɴᴀʟ : ${link}
> ᴄᴏᴍᴘʀᴇss : ${linkcompres}`, m)
}
handler.help = ['resize <width> <height> (reply|caption)']
handler.tags = ['tools']
handler.command = /^(resize)$/i

module.exports = handler

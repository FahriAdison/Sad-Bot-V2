var { 
  youtubedl,
  youtubedlv2 
} = require ('@bochilteam/scraper')

var fetch = require ('node-fetch')


var handler = async (m, { conn, args, isPrems, isOwner, usedPrefix: _p }) => {

  if (!args[0]) return m.reply('Link?')
var type = (args[0] || '').toLowerCase()

var res = '128kbps'
var v = args[0]
var yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
var ttl = await yt.title
var sA = await yt.audio[res].fileSizeH
var q10 = await yt.video['1080p']?.fileSizeH
var q72 = await yt.video['720p']?.fileSizeH
var q48 = await yt.video['480p']?.fileSizeH
var q36 = await yt.video['360p']?.fileSizeH

var pp = await( await conn.profilePictureUrl(conn.user.jid, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
//or global.thumb
var namae = conn.getName(m.sender)

var trol = {
key : {
                        participant : '0@s.whatsapp.net'
                      },
     message: {
                  orderMessage: {
                          itemCount : 999999999999,
                          itemCoun : 404,
                          surface : 404,
                          message: `© ${conn.user.name}\n`,
                          orderTitle: wm,
                          thumbnail: await (await fetch(pp)).buffer(), 
                          sellerJid: '0@s.whatsapp.net'
        
                        }
                      }
                    }

var sections = [
{
title: "Select Type Media Here !",
rows: [
    {title: "Audio", rowId: _p + `getaud ${args[0]} audio`, description: sA }
]
  },
  {
title: "Video",
rows: [
    {title: "1080p", rowId:  _p + `getvid ${args[0]} 1080`, description: q10 || '-' },
{title: "720p", rowId:  _p + `getvid ${args[0]} 720`, description: q72 || '-' },
{title: "480p", rowId:  _p + `getvid ${args[0]} 480`, description: q48 || '-' },
{title: "360p", rowId:  _p + `getvid ${args[0]} 360`, description: q36 || '-' }

]
  },
 
]

var listMessage = {
text: `▢ Tittle: ${ttl}\n`,
footer: `\tPʟᴇᴀꜱᴇ Sᴇʟᴇᴄᴛ Tʜᴇ Mᴇᴅɪᴀ Tyᴩᴇ\t`,
title: `\t${l} Yᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ${r}\t`,
buttonText: `${l}\t⬇️ Download ⬇️\t${r}`,
sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: m  })
}


handler.help = ['yt', 'ytv', 'yta', 'ytmp3', 'ytmp4']
handler.tags = ['downloader']
handler.alias = ['yt', 'ytv', 'yta', 'ytmp3', 'ytmp4']
handler.command = /^yt(v|a|mp4|mp3)?$/i
handler.exp = 3
handler.rowner = false
module.exports = handler
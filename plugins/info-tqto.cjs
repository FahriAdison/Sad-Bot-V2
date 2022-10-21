var fetch = require ('node-fetch')
var fs = require ('fs')
var handler = async (m, { conn, usedPrefix }) => {
var wibu = `https://erdwpe-api.herokuapp.com/randomimg/waifu`    
var thumb = await(await fetch(wibu)).buffer()
    var pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    var res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    var txt = await res.text()
    var arr = txt.split('\n')
    var cita = arr[Math.floor(Math.random() * arr.length)]
    var thumb = await(await fetch(cita)).buffer()
    var who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    var user = global.db.data.users[who]
var tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
https://github.com/adiwajshing
*❉ Nurutomo:*
https://github.com/Nurutomo
*❉ Istikmal:* 
https://github.com/BochilGaming
*❉ Ariffb:*
https://github.com/Ariffb25
*❉ Ilman:*
https://github.com/ilmanhdyt
*❉ Amirul:*
https://github.com/amiruldev20
*❉ Rasel:*
https://github.com/raselcomel
*❉ Fatur:*
https://github.com/Ftwrr
*❉ Rominaru:*
https://github.com/Rominaru
*❉ Letta:*
https://github.com/HirooSy
*❉ The.sad.boy01:*
https://github.com/kangsad01
*❉ Ameliascrf:*
https://github.com/Ameliascrf
*❉ Fokus ID:*
https://github.com/Fokusdotid
*❉ Johannes:*
https://github.com/Johannes2803
*❉ BrunoSobrino:*
https://github.com/BrunoSobrino
*❉ Krisna:*
https://github.com/NevtBotz
*❉ LitRHap:*
https://github.com/LitRHap
*❉ Rlxfly:*
https://github.com/Rlxfly
*❉ Aine:*
https://github.com/Aiinne
*▸ - - - —「 KANG RECODE 」— - - - ◂*
*❉ Fahri:*
https://github.com/FahriAdison
*▸ - - - —「 SPESIAL HELPER 」— - - - ◂*
*❉ Letta:*
*❉ Johannes:*
*❉ Krisna:*
*❉ Rlxfly:*
`
conn.sendButtonDoc(m.chat, tqto, wm, 'Menu', '/menu', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "https://Instagram.com/bot_whangsaf",
        mediaType: "VIDEO",
        description: "https://Instagram.com/bot_whangsaf", 
        title: 'Simple Bot Esm',
        body: wm,
        thumbnail: thumb,
        sourceUrl: sgc
    }
    } })
            }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
module.exports = handler
var fetch = require ('node-fetch')
var fs = require ('fs')
var handler = async (m, { conn, text, command, usedPrefix }) => {
var frep = { contextInfo: { externalAdReply: {title: global.wm, body: 'Simple Bot Esm', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
var fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'dec32') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    var res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&decode=${text}`)
    var data = await res.json()
    
    var caption = `Enc: ${data.result.enc}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}enc32 ${text}`]
    ], m, fdoc)
}

if (command == 'enc32') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    var res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&encode=${text}`)
    var data = await res.json()
    
    var caption = `Enc: ${data.result.encode}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}dec32 ${text}`]
    ], m, fdoc)
}

if (command == 'dec64') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    var res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&decode=${text}`)
    var data = await res.json()
    
    var caption = `Enc: ${data.result.enc}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}enc64 ${text}`]
    ], m, fdoc)
}

if (command == 'enc64') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    var res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&encode=${text}`)
    var data = await res.json()
    
    var caption = `Enc: ${data.result.encode}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}dec64 ${text}`]
    ], m, fdoc)
}


}
handler.command = handler.help = ['enc32', 'dec32', 'enc64', 'dec64']
handler.tags = ['tools']

module.exports = handler

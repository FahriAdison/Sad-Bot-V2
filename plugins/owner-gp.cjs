var cp, { exec : _exec } = require ('child_process')
var { promisify } = require ('util')
var exec = promisify(_exec).bind(cp)

var handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
await m.reply(global.wait)
    if (!isROwner) return
    var ar = Object.keys(plugins)
    var ar1 = ar.map(v => v.replace('.cjs', ''))
    if (!text) throw `uhm.. where the text?\n\nexample:\n${usedPrefix + command} info`
    if (!ar1.includes(text)) return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    var o
    try {
        o = await exec('cat plugins/' + text + '.cjs')
    } catch (e) {
        o = e
    } finally {
        var { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['getplugin'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i
handler.rowner = true

module.exports = handler
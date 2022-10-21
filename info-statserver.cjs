var cp = require ('child_process')
var { promisify } = require('util')
var exec = promisify(cp.exec).bind(cp)
var handler = async (m) => {
	await conn.reply(m.chat, "Wait", m)
    var o
    try {
        o = await exec('df -h')
    } catch (e) {
        o = e
    } finally {
        var { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['statserver']
handler.tags = ['info']
handler.command = /^(statserver)$/i

module.exports = handler
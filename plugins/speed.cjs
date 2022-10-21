var { cpus : _cpus, totalmem, freemem } = require ('os')
var util = require ('util')
var os = require ('os')
var fetch = require ('node-fetch')
var osu = require ('node-os-utils')
var { performance } = require ('perf_hooks')
var { sizeFormatter } = require ('human-readable')
var format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
var handler = async (m, { conn, isRowner}) => {
	var _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    var muptime = clockString(_muptime)
	var chats = Object.entries(store.chats).filter(([id, data]) => id && data.isChats)
  var groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  var used = process.memoryUsage()
  var cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  var cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  var old = performance.now()
  await m.reply(`${htjava} *T e s t i n g. . .*`)
  var neww = performance.now()
  var speed = neww - old
  await conn.reply(m.chat,`*S P E E D*
${Math.round(neww - old)} ms
${speed} ms

*R U N T I M E* 
${muptime}
${readMore}
*CHATS*
• *${groupsIn.length}* Group Chats
• *${groupsIn.length}* Groups Joined
• *${groupsIn.length - groupsIn.length}* Groups Left
• *${chats.length - groupsIn.length}* Personal Chats
• *${chats.length}* Total Chats


*SERVER*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*💻 Platform :* ${os.platform()}
*🧿 Server :* ${os.hostname()}
${readMore}
NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`, m)
}
handler.help = ['ping', 'speed']
handler.tags = ['info']

handler.command = /^(ping|speed|info)$/i
module.exports = handler

var more = String.fromCharCode(8206)
var readMore = more.repeat(4001)

function clockString(ms) {
  var d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  var h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  var m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  var s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
await m.reply(`⬇️ *𝙀𝙎𝙎𝙀 𝙀́ 𝙊 𝙎𝙀𝙐 𝙉𝙐́𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀́𝙍𝙄𝙀* ⬇️`.trim())
await m.reply(`${sn}`.trim())
}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler

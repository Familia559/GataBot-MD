let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}𝙈𝘼𝙍𝙌𝙐𝙀 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙌𝙐𝙀 𝙑𝙊𝘾𝙀̂ 𝙑𝘼𝙄 𝙍𝙀𝙈𝙊𝙑𝙀𝙍 𝘿𝙊𝙎 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊𝙎 𝙑𝙄𝙋 😿\n\n𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `${iig}𝙊 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊 𝙉𝘼̃𝙊 𝙀́ 𝙑𝙄𝙋 🥺\n\n𝙊 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊 𝙉𝘼̃𝙊 𝙀́ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🥺`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝘼𝙂𝙊𝙍𝘼 𝙊 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊 𝙉𝘼̃𝙊 𝙀́ 𝙈𝘼𝙄𝙎 𝙑𝙄𝙋. 𝙏𝙀𝙍𝘼́ 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 𝘾𝙊𝙈 ${gt} 😰\n\n@${who.split`@`[0]} 𝘼𝙂𝙊𝙍𝘼 𝙑𝙊𝘾𝙀̂ 𝙉𝘼̃𝙊 𝙀́ 𝙈𝘼𝙄𝙎 𝙐𝙈 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈. 𝙏𝙀𝙉𝙃𝘼 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 😰`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler

let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}𝙈𝘼𝙍𝙌𝙐𝙀 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙌𝙐𝙀 𝙑𝙊𝘾𝙀̂ 𝙑𝘼𝙄 𝙍𝙀𝙈𝙊𝙑𝙀𝙍 𝘿𝙊𝙎 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊𝙎 𝙑𝙄𝙋 😿\n\n𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `${iig}𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙉𝙊 𝙀𝙎 𝙑𝙄𝙋 🥺\n\n𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 𝙄𝙎 𝙉𝙊𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🥺`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙔𝘼 𝙉𝙊 𝙀𝙎 𝙑𝙄𝙋. 𝙏𝙀𝙉𝘿𝙍𝘼 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 𝘾𝙊𝙉 ${gt} 😰\n\n@${who.split`@`[0]} 𝙉𝙊𝙒 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊 𝙇𝙊𝙉𝙂𝙀𝙍 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍. 𝙃𝘼𝙑𝙀 𝙇𝙄𝙈𝙄𝙏𝙎 😰`, m, {
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

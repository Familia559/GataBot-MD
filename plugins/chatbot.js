// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return

if (/^maguinho/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`𝑶𝑷𝑨, 𝑶𝑸𝑼𝑬 𝑽𝑶𝑪𝑬̂ 𝑸𝑼𝑬𝑹 𝑪𝑶𝑴 𝑴𝑬𝑼 𝑴𝑬𝑺𝑻𝑹𝑬?`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/

if (/^regras|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
    conn.reply(m.chat, `╭┅〘 ⚠️ 𝐎𝐛𝐞𝐝𝐞𝐜̧𝐚 𝐚𝐬 𝐑𝐞𝐠𝐫𝐚𝐬 ⚠️ 〙*
➽❌ 𝙿𝚛𝚘𝚒𝚋𝚒𝚍𝚘 𝚞𝚜𝚊 𝚘 𝙱𝙾𝚃 𝚗𝚘 𝚙𝚟 𝚜𝚎𝚖 𝙿𝚎𝚛𝚖𝚒𝚜𝚜𝚊̃𝚘.
➽❌ 𝙽𝚊̃𝚘 𝚊𝚍𝚒𝚌𝚒𝚘𝚗𝚎 𝚘 𝙱𝚘𝚝
➽❌ 𝙿𝚛𝚎𝚓𝚞𝚍𝚒𝚌𝚊𝚛 𝚘 𝙱𝚘𝚝 𝚎́ 𝙿𝚛𝚘𝚒𝚋𝚒𝚍𝚘
➽❌ 𝙿𝚛𝚘𝚒𝚋𝚒𝚍𝚘 𝚜𝚙𝚊𝚖 𝚗𝚘 𝙱𝚘𝚝
➽❌𝚁𝚎𝚜𝚙𝚎𝚒𝚝𝚎 𝚘𝚜 𝚃𝚎𝚛𝚖𝚘𝚜 𝚎 𝙲𝚘𝚗𝚍𝚒𝚌̧𝚘̃𝚎𝚜
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

/* if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `Hola :D`, fkontak, m)

 }*/
 
if (/^oquie um bot?|Que es un bot|Que es gatabot?$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::¿Quie um bot de WhatsApp?::☆
┆——————«•»——————
┆ o bot e uma inteligência artificial que executa tarefas que você indica 
┆ com comandos,no whatsapp você pode criar stickers,baixar músicas,vídeos,
┆ criar logos tipos personalizados é muito mais,isso de forma automática,
┆ ou seja,humano não interfere no processo.
┆ 
┆       Obrigado Por sua compreensão.
┆ 
┆    Para ver o menu de comandos user !menu
┆ 
┆ 「 🅖🅐🅣🅐🅑🅞🅣-🅜🅓 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}


let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let cafirexos = `
_Otimize a implantação do *GataBot* integrando-o a um serviço de hospedagem de alto desempenho._

*🐈 Compartilhe com GataBot*
Aproveite a compatibilidade e comece a usar o GataBot em servidores de alto desempenho. O Staff Maguinho é a GataBot possibilitam que você execute as funções que tanto gosta de utilizar, sentindo uma experiência fluida e de qualidade..

🔵 \`\`\`Informação dos Grupos\`\`\`

💻 *Grupo Teste*
https://chat.whatsapp.com/Ix8PiZQCjhl0uKTs76dfHD

✨ *Manutenção*


⚙️ *Suporte*
https://chat.whatsapp.com/IrireRmdD2T49uq7AJQmhc

📢 *Canal de WhatsApp*
https://chat.whatsapp.com/KSdxcdn16JVBKs3Ok4KROl

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/IosaZb6yEXT6DSwRLkOfnS

📧 *Correio*
vg981317@gmail.com

🧑‍💻 *Contato (Maguinho MD)*
https://wa.me/558193813503
`
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexos.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 A N U N C I O 🔵`,
body: `✅ Sejam Bem vindos`,
mediaType: 1,
sourceUrl: accountsgb.getRandom(),
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })

}
handler.command = /^(anunciar|prueba38)$/i
export default handler

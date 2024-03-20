let handler = async(m, { conn, command }) => {

let text = `*🥏 O DONO @${m.sender.split`@`[0]} VOCÊ SOLICITOU SUA PRESENÇA NA EQUIPE, ENTRE EM CONTATO COM A EQUIPE O MAIS RÁPIDO POSSÍVEL*

*𝙎𝙩𝙖𝙛𝙛 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 🐱*`
m.reply('*⚠️ ENVIANDO MENSAGEM A TODOS OS DONOS*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler

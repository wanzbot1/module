
let handler = async (m, { conn, usedPrefix }) => { 

let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `
➖➖➖➖➖➖➖➖➖➖➖

DANA: 085380779466
GOPAY: 085380779466
(a/n SU*****)

➖➖➖➖➖➖➖➖➖➖➖
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['payment']
handler.command = /^(pembayaran|payment|metode)$/i
module.exports = handler

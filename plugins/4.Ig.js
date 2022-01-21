
let handler = async (m, { conn, usedPrefix }) => { 

let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `
➖➖➖➖➖➖➖➖➖➖➖
Jangan lupa cek ig kami :
https://instagram.com/dimasferdy12?utm_medium=copy_link

dijamin cepat,murah,aman, amanah & terpercaya!!
➖➖➖➖➖➖➖➖➖➖➖
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['ig']
handler.command = /^(ig|instagram|igshop)$/i
module.exports = handler

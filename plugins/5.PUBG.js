
let handler = async (m, { conn, usedPrefix }) => { 

let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `


*PUBG MOBILE*

- Via ID & USERNAME.
- Proses 1-60 Menit, Max 24 Jam
- 100% legal dan aman.


131 UC : Rp.25.000
221 UC : Rp.41.000
770 UC : Rp.136.000 
2013 UC : Rp.340.000
4200 UC : Rp.680.000
8750 UC : Rp.1.359.000



 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['pubg']
handler.command = /^(ucpubg|pubg|uc)$/i
module.exports = handler

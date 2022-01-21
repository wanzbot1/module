
let handler = async (m, { conn, usedPrefix }) => { 

let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `

*MOBILE LEGENDS (A)*

- Via (ID) (server) & USERNAME..
- Proses 1-120 Menit, Max 24 Jam
- 100% legal dan aman.


💎113 : Rp.26.000 
💎168 : Rp.38.000 
💎226 : Rp.52.000 
💎339 : Rp.76.000
💎460 : Rp.103.000 
💎1427 : Rp.300.000 
💎2398 : Rp.495.000 
💎3596 : Rp.740.000 
💎6038 : Rp.1.250.000 




 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['mobilelegends']
handler.command = /^(ml2|mobilelegends2|mobilelegend2)$/i
module.exports = handler

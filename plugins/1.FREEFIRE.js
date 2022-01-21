
let handler = async (m, { conn, usedPrefix }) => { 

let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `


*FREE FIRE*

- Via ID & USERNAME.
- Proses 1-10 Menit, Max 12 Jam (Event)
- 100% legal dan aman.


💎20 : Rp.3000 
💎50 : Rp.7000 
💎70 : Rp.9.000
💎100 : Rp.15.000 
💎140 : Rp.19.000
💎210 : Rp.29.000 
💎280 : Rp.39.000
💎355 : Rp.49.000 
💎425  Rp.59.000 
💎495 : Rp.69.000
💎720 : Rp.99.000 
💎860 : Rp.115.000 
💎1075 : Rp.140.000 
💎1440 : Rp.189.000
💎2000 : Rp.255.000 
💎4000 : Rp.509.000 
💎7290 : Rp.929.000 
Member Mingguan : Rp.29.000
Member Bulanan : Rp.145.000 


 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['freefire']
handler.command = /^(ff|freefire)$/i
module.exports = handler

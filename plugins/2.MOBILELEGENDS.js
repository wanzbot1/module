
let handler = async (m, { conn, usedPrefix }) => { 

let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zer = `


*MOBILE LEGENDS FAST*


- Via (ID) (server) & USERNAME.
- Proses 1-9 Menit, Max 12 Jam (Event)
- 100% legal dan aman.



💎86 : Rp.21.000 
💎172 : Rp.39.000 
💎257 : Rp.59.000 
💎344 : Rp.79.000 
💎429 : Rp.99.000 
💎514 : Rp.119.000 
💎706 : Rp.159.000
💎878 : Rp.199.000
💎963 : Rp.219.000 
💎1412 : Rp.319.000
💎2195 : Rp.470.000
💎2901 : Rp.635.000 
💎3688 : Rp.780.000
💎4390 : Rp.939.000 
💎5532 : Rp.1.170.000
💎6238 : Rp.1.330.000 
💎7376 : Rp.1.560.000 
💎9288 : Rp.1.950.000 
💎9994 : Rp.2.110.000 
Starlight : Rp.130.000 
Starlight Plus : Rp.295.000 
Twilight Pass : Rp.130.000




 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['mobilelegends']
handler.command = /^(ml|mobilelegends|mobilelegend)$/i
module.exports = handler

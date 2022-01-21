let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "*Silahkan Klik Menu Dibawah*",
                        "description": "© ICEDRAGONSTORE",
                        "buttonText": "PILIH",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `DIAMOND FF`,
                                        "rowId": ".freefire"
                                    },{
                                        "title": "DIAMOND ML",
                                        "rowId": ".mobilelegends"                 
                                    },{
                                        "title": "MOBILE LEGEND2",
                                        "rowId": ".mobilelegends2"
                                    },{
                                        "title": "UC PUBG",
                                        "rowId": ".pubg"
                                    },{                                	
                                    	"title": "PAYMENT",
                                        "rowId": ".pembayaran"
                                    },{
                                        "title": "GROUP",
                                        "rowId": "groupice"                 
                                    },{
                                        "title": "PEMBAYARAN",
                                        "rowId": ".pembayaran"
                                    },{
                                        "title": "MENU",
                                        "rowId": ".menua"                                                     
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['menu']
handler.register = false
module.exports = handler
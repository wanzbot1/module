let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.energi = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.healt)) user.healt = 100
            if (!isNumber(user.level)) user.level = 1
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.energi)) user.energi = 10
            if (!isNumber(user.money)) user.money = 10000
  
             if (!isNumber(user.stamina)) user.stamina = 100
        
//😥ByDimas

            if (!isNumber(user.kastil)) user.kastil = 0
            if (!isNumber(user.pancing)) user.pancing = 0
            if (!isNumber(user.umpan)) user.umpan = 0

            if (!isNumber(user.dmff)) user.dmff = ''


//senjata

            if (!isNumber(user.tembak)) user.tembak = 0
            if (!isNumber(user.tombak)) user.tombak = 0
            if (!isNumber(user.pedang)) user.pedang = 0
            

 




            //item
            if (!isNumber(user.as)) user.as = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            if (!isNumber(user.air)) user.air = 0
            if (!isNumber(user.nasi)) user.nasi = 0
            if (!isNumber(user.pancing)) user.pancing = 0
            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.semen)) user.semen = 0
            if (!isNumber(user.kunci)) user.kunci = 0
   
             if (!isNumber(user.sim)) user.sim = 0
    
             if (!isNumber(user.besi)) user.besi = 0
             if (!isNumber(user.istana)) user.istana = 0             
             if (!isNumber(user.perisai)) user.perisai = 0
             if (!isNumber(user.peti)) user.peti = 0
             if (!isNumber(user.maxPeti)) user.maxPeti = 0

//nambang
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.emas)) user.emas = 0

//hewan

            if (!isNumber(user.ayam)) user.ayam = 0
            if (!isNumber(user.sapi)) user.sapi = 0
            if (!isNumber(user.monyet)) user.monyet = 0
            if (!isNumber(user.domba)) user.domba = 0

//ikan
            if (!isNumber(user.udang)) user.udang = 0
            if (!isNumber(user.kepiting)) user.kepiting = 0
            if (!isNumber(user.paus)) user.paus = 0
            if (!isNumber(user.hiu)) user.hiu = 0
            if (!isNumber(user.buntal)) user.buntal = 0
            if (!isNumber(user.pari)) user.pari = 0

            if (!isNumber(user.nanam)) user.nanam = 0

            if (!isNumber(user.rumah)) user.rumah = 0





            if (!'Banneduser' in user) user.Banneduser = false
            if (!'BannedReason' in user) user.BannedReason = ''
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
      



// by dimas
        
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = 0
            if (!user.role) user.role = 'Beginner'
            if (!('autolevelup' in user)) user.autolevelup = false
        } else global.DATABASE._data.users[m.sender] = {
            healt: 100,
            level: 0,
            exp: 0,
            energi: 10,
            money: 0,
     

//item
            air: 0,
            sampah: 0,
            armor: 0,
            Banneduser: false,
            BannedReason: '',
            as: 0,
            warn: 0,
            kayu: 0,
            buntal: 0,
semen: 0,
kastil: 0,
besi: 0,
perisai: 0,
kunci: 0,
peti: 0,
dmff: 0,
rumah: 0,
maxPeti: 0,
pancing: 0,
umpan: 0,
sim: 0,
            hiu: 0,
            paus: 0,
            kepiting: 0,
            udang: 0,
            pari: 0,
            pancing: 0,
            nasi: 0,
            diamond: 0,
            emas: 0,
            sapi: 0,
            istana: 0,
pedang: 0,
tembak: 0,
tombak: 0,
nanam: 0,
            domba: 0,
            monyet: 0,
            ayam: 0,
            afk: -1,
            afkReason: '',
            kayu: 0,
            batu: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            
            role: 'Beginner', 
            autolevelup: true,
        }

        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = true
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('delete' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!'antiToxic' in chat) chat.antiToxic = false
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: false,
          antiLink: false,
          antiToxic: false,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (m.chat == 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      conn.chatRead(m.chat)
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
     
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let DevMode = (global.DeveloperMode.toLowerCase() == 'true') || false
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.Banneduser) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
  
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 15 // XP Earning per command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.energi && global.DATABASE._data.users[m.sender].energi < plugin.energi * 1) {
            this.reply(m.chat, `Tiket Anda Habis, Silahkan Beli Melalui *${usedPrefix}buy*`, m)
            continue // energi habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
         
            chatUpdate,
            DevMode,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.energi = m.energi || plugin.energi || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), 'HIRO')
                if (DevMode && text.length > 100) {
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))  m.reply(`*file:* ${m.plugin}\n*Nomor:* ${m.sender}\n*Text:* ${m.text}\n\n\`\`\`${text}\`\`\``, jid)
                }
                m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.energi) m.reply(+ m.energi + ' Energi Terpakai')
          }
          break
        }
      }
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.energi -= m.energi * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            let pp = 'https://i.ibb.co/fHDx30X/20210725-125918.jpg'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace('@user', '@' + user.split`@`[0])
              let wel = `https://hardianto-chan.herokuapp.com/api/tools/welcomer2?name=${encodeURIComponent(this.getName(user))}&descriminator=${user.split(`@`)[0].substr(-5)}&totalmem=${encodeURIComponent(groupMetadata.participants.length)}&namegb=${encodeURIComponent(this.getName(jid))}&ppuser=${pp}&background=https://i.ibb.co/KhtRxwZ/dark.png&apikey=hardianto`
              let lea = `https://hardianto-chan.herokuapp.com/api/tools/leave2?name=${encodeURIComponent(this.getName(user))}&descriminator=${user.split(`@`)[0].substr(-5)}&totalmem=${encodeURIComponent(groupMetadata.participants.length)}&namegb=${encodeURIComponent(this.getName(jid))}&ppuser=${pp}&background=https://i.ibb.co/KhtRxwZ/dark.png&apikey=hardianto`

              this.sendFile(jid, action === 'add' ? wel : lea, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.remoteJid == 'status@broadcast') return
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} Telah Menghapus Pesan Ini

Untuk Mematikan Fitur Ini, Ketik
*.enable delete*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
    async onCall(json) {
        let { from } = json[2][0][1]
        let users = global.DATABASE.data.users
        let user = users[from] || {}
        if (user.whitelist) return
        switch (this.callWhitelistMode) {
            case 'mycontact':
                if (from in this.contacts && 'short' in this.contacts[from])
                    return
                break
        }
        //await this.sendMessage(from, '', MessageType.extendedText)
        //await this.blockUser(from, 'add')
    }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: '*[❗] Creator Only*', 
    owner: '*[❗] Owner Only*',
    mods: '*[❗] Moderator Only*',
    premium: '*[❗] Premium User Only*',
   
    group: '*[❗] Group Only*',
    private: '*[❗] Private Only*',
    admin: '*[❗] Admin Group Only*',
    botAdmin: '*[❗] Bot Admin Only*',
    unreg: '── 「 😟NON VERIFIKASI 」 ──\n🔶 Nomer Belum terdaftar!!\n🔶 Tidak bisa mengakses..\n\n🔶 Daftar nomer ketik : \n\t#daftar <nama>|<umur>\n\n🔶Contoh daftar nomer :\n\t#daftar Dimas|17\n💾Jika sudah maka otomatis nomer anda akan terdaftar di bot ini!!'
}[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
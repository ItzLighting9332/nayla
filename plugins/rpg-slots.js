let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => { 
    conn.slots = conn.slots ? conn.slots : {}
    if (m.chat in conn.slots) return m.reply('Masih ada Yang Melakukan Slots Disini, Tunggu Sampai selesai!!')
    else conn.slots[m.chat] = true
    try { 
        if (args.length < 1) return m.reply(`Gunakan format *${usedPrefix}${command} [jumlah]*
contoh *${usedPrefix}${command} 999*`)
        let count = (typeof args[0] == 'number' ? Math.round(Math.max(args[0], 1)) : 1)
        let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
        let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
        let spin1 = (_spin1 * 1)
        let spin2 = (_spin2 * 1)
        let spin3 = (_spin3 * 1)
        let spin4 = (_spin4 * 1)
        let spin5 = (_spin5 * 1)
        let spin6 = (_spin6 * 1)
        let spin7 = (_spin7 * 1)
        let spin8 = (_spin8 * 1)
        let spin9 = (_spin9 * 1)
        let spins1 = (spin1 == 1 ? 'ðŸŠ' : spin1 == 2 ? 'ðŸ‡' : spin1 == 3 ? 'ðŸ‰' : spin1 == 4 ? 'ðŸŒ' : spin1 == 5 ? 'ðŸ' : '')
        let spins2 = (spin2 == 1 ? 'ðŸŠ' : spin2 == 2 ? 'ðŸ‡' : spin2 == 3 ? 'ðŸ‰' : spin2 == 4 ? 'ðŸŒ' : spin2 == 5 ? 'ðŸ' : '')
        let spins3 = (spin3 == 1 ? 'ðŸŠ' : spin3 == 2 ? 'ðŸ‡' : spin3 == 3 ? 'ðŸ‰' : spin3 == 4 ? 'ðŸŒ' : spin3 == 5 ? 'ðŸ' : '')
        let spins4 = (spin4 == 1 ? 'ðŸŠ' : spin4 == 2 ? 'ðŸ‡' : spin4 == 3 ? 'ðŸ‰' : spin4 == 4 ? 'ðŸŒ' : spin4 == 5 ? 'ðŸ' : '')
        let spins5 = (spin5 == 1 ? 'ðŸŠ' : spin5 == 2 ? 'ðŸ‡' : spin5 == 3 ? 'ðŸ‰' : spin5 == 4 ? 'ðŸŒ' : spin5 == 5 ? 'ðŸ' : '')
        let spins6 = (spin6 == 1 ? 'ðŸŠ' : spin6 == 2 ? 'ðŸ‡' : spin6 == 3 ? 'ðŸ‰' : spin6 == 4 ? 'ðŸŒ' : spin6 == 5 ? 'ðŸ' : '')
        let spins7 = (spin7 == 1 ? 'ðŸŠ' : spin7 == 2 ? 'ðŸ‡' : spin7 == 3 ? 'ðŸ‰' : spin7 == 4 ? 'ðŸŒ' : spin7 == 5 ? 'ðŸ' : '')
        let spins8 = (spin8 == 1 ? 'ðŸŠ' : spin8 == 2 ? 'ðŸ‡' : spin8 == 3 ? 'ðŸ‰' : spin8 == 4 ? 'ðŸŒ' : spin8 == 5 ? 'ðŸ' : '')
        let spins9 = (spin9 == 1 ? 'ðŸŠ' : spin9 == 2 ? 'ðŸ‡' : spin9 == 3 ? 'ðŸ‰' : spin9 == 4 ? 'ðŸŒ' : spin9 == 5 ? 'ðŸ' : '' )
        let user = global.db.data.users[m.sender]
        user.money -= count * 1
        for (let i = 0; i < 3; i++) {
            m.reply(`
            *ðŸŽ°VIRTUAL SLOTSðŸŽ°*
            
${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}|${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}|${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}
${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}|${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}|${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])} <<==
${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}|${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}|${pickRandom(['ðŸŠ', 'ðŸ‡', 'ðŸ‰', 'ðŸŒ', 'ðŸ'])}
            
            `.trim())
        }
        let WinOrLose, Hadiah
        if (spin1 == spin2 && spin2 == spin3 && spin3 == spin4 && spin4 == spin5 && spin5 == spin6 && spin6 == spin7 && spin7 == spin8 && spin8 == spin9) {
            WinOrLose = 'BIG JACKPOT'
            Hadiah = `+${count * 4}`
            user.money += count * 4
        } else if (spin4 == spin5 && spin5  == spin6) {
           WinOrLose = 'JACKPOT' 
           Hadiah = `+${count * 2}`
           user.money += count * 2
        } else if ((spin1 == spin2 && spin2 == spin3) || (spin7 == spin8 && spin8 == spin9)) {  
            Hadiah = `-${count * 1}`
            WinOrLose = 'DIKIT LAGI!!'
        } else {
             Hadiah = `-${count * 1}`
             WinOrLose = 'YOU LOSE'
        } 
        conn.reply(m.chat, `
       *VIRTUAL SLOTS*

${spins1}|${spins2}|${spins3}
${spins4}|${spins5}|${spins6} <<==
${spins7}|${spins8}|${spins9}

*${WinOrLose}* *${Hadiah}*
`.trim(), m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Menu.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.slots[m.chat]
    }
}
handler.help = ['slots', 'jackpot']
handler.tags = ['rpg']
handler.command = /^slots?|jac?kpot$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

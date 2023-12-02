import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = `@${m.sender.replace(/@.+/, '')}`
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=SGWN&url=${text}`)
  let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${text}`)
  let res2 = await res.json()
  let don = await view.json()
 let jsoon = don.result
  let x = res2.result
  await m.reply(`*_Wait Kak..._*`)
let cap = `Done ${name}\n\n*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                     ███████▀▀▀█████
                     ████████────▀██
                     ████████──█▄──█
                     ███▀▀▀██──█████
                     █▀──▄▄██──█████
                     █──█████──█████
                     █▄──▀▀▀──▄█████
                     ███▄▄▄▄▄███████         
                      ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ 
  ▣\n┆➵ Author : ${jsoon.author}\n┆➵ Play : ${jsoon.playCount}\n┆➵ Publish : ${jsoon.createdAt}\n┆➵ Likes : ${jsoon.likesCount}\n┆➵ Command : ${jsoon.commentCount}\n┆➵ Shares : ${jsoon.shareCount}\n⟡ ━━┄┄┄┈┈┈\nDescription:\n${jsoon.description}`

conn.sendFile(m.chat, x.link, 'tiktok.mp4',cap,m)
}
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i
handler.limit = 3

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
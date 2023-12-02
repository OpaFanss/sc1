import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw '\nSertakan link tiktoknya kak !\n\nContoh: .tiktok https://vt.tiktok.com/'
    m.reply(global.wait)

 const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
 
  const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
 
 let t = `❏ ––––––『 𝐓 𝐈 𝐊 𝐓 𝐎 𝐊 』–––––– ❏`
 let tt = `\nDone @${m.sender.split`@`[0]}\nName: ${nickname}\nDescription: ${description}`

/*   conn.sendFile(m.chat, url, 'tiktok.mp4', 
`ᴛ ɪ ᴋ ᴛ ᴏ ᴋ :
• Name: ${nickname}
• Description: ${description}


                                    「 ʙʏ ʟᴀʟᴀ ʙᴏᴛ 」
`.trim(), m)
*/

await conn.sendButton(m.chat, t, tt, url, [['Donasi', '.donasi']],m)
}
handler.help = ['tiktok2']
handler.tags = ['downloader']
handler.command = /^(tiktok2|tt2)$/i

export default handler

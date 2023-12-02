import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Input URL'
	
let res = await fetch(`https://api.botcahx.biz.id/api/dowloader/twitter?url=${args[0]}&apikey=${botcahx}`)

let x = await res.json()

let cap = `   ⏤͟͟͞͞★𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 ꗄ➺

Done @${m.sender.split`@`[0]}

Description: ${x.result.desc}

${wm}

${botdate}
`
await conn.sendFile(m.chat, x.result.HD, 'twitter.mp4', cap, m)

}

handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^((twt|twitter)(dl)?)$/i

export default handler


import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/anjing?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Nih Image Anjing', m)
}
handler.command = /^(anjing)$/i
handler.tags = ['quetes', 'internet']
handler.help = ['anjing']
handler.premium = false
handler.limit = true

export default handler
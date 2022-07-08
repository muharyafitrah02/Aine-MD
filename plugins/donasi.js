let handler = async m => m.reply(`
╭─「 Donasi • Dana,Gopay,Pulsa 」
│ •  [0852-4434-4615]
│ •
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

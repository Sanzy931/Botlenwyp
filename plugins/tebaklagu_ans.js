const similarity = require('similarity');
const threshold = 0.72;

module.exports.before = async function (m) {
    let id = 'tebaklagu-' + m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlagu/i.test(m.quoted.text) || /.*hlagu/i.test(m.text)) {
        return true;
    }

    this.game = this.game || {};
    if (!(id in this.game)) {
        return m.reply('Soal itu telah berakhir');
    }

    if (m.quoted.id == this.game[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text);
        if (isSurrender) {
            clearTimeout(this.game[id][3]);
            delete this.game[id];
            return m.reply('*Yah Menyerah :( !*');
        }

        let json = JSON.parse(JSON.stringify(this.game[id][1]));
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.game[id][2];
            m.reply(`*Benar!*\n+${this.game[id][2]} XP`);
            clearTimeout(this.game[id][3]);
            delete this.game[id];
        } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) {
            m.reply(`*Dikit Lagi!*`);
        } else {
            m.reply(`*Salah!*`);
        }
    }

    return true;
};

module.exports.exp = 0;
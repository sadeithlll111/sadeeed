


const config = require('../../settings');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "base",
    desc: "NATHAN MENU",
    category: "menu",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
╭──────────────≫
┋*ᴄʀᴇᴀᴛᴏʀ* : *NATHAN*
┋*ᴍᴏᴅᴇ* : *${config.MODE}*
┋*ᴘʀᴇғɪx* : *${config.PREFIX}*
┋*ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┋*ᴠᴇʀsɪᴏɴ* : *2.0.4* 
┋*ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
┋
╰──────────────≫
   
   SADE  ↷


${readMore}
\`CHANNEL🩵\`
https://whatsapp.com/channel/0029VagLBl4DeOMyzdqe690U

\`GROUP💙\` 👥
https://chat.whatsapp.com/JrQouhBQqFK0M93KjGIyfR

\`NATHAN\` *Developer🧑‍💻*
wa.me/918438374975?text=Support!


> SADE

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/t5jj6j.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🪀『 SADE 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});








const config = require('../../settings');


const {cmd , commands} = require('../command')
cmd({
    pattern: "intro",
    alias: ["nathan"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `
   *sade WHATSAPP USER BOT* 💫

                *MY MISSION*

🐼i gat no life

👨‍💻 OWNER nathan 

🎡 *GITHUB:*  https://github.com/luxxy4/

🪩 *MY GROUP:* https://whatsapp.com/channel/0029VagLBl4DeOMyzdqe690U



`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/t5jj6j.jpg` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🪀『 sade 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/nathanxluci4/malvin-database/raw/refs/heads/main/Media/menu.mp3
        await conn.sendMessage(from, { //https://github.com/nathanxluci4/malvin-database/raw/refs/heads/main/Media/menu.mp3
            audio: { url: 'https://github.com/nathanxluci4/malvin-database/raw/refs/heads/main/Media/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


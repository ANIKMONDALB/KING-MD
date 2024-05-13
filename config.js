const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("8617340627,")
global.mongodb = process.env.MONGODB_URI || "https://www.instagram.com/b_a_d_b_o_y_699?igsh=MTNyeHVzY2doYmR4dg=="
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '917479144389'
global.devs = '923096566451';
global.website = 'https://king-session.vercel.app' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,꧁༒☬☠An!k☠︎☬༒꧂
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0I4bldMam5qZC96LzV2UGxGUE1vWFVPOGRUU0pUaFdNdVR5UGxvaW9XND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk9RZlhha05ieHAvUkl6akxYdTIyYmlMQjZhNGFIeGJ5cWhrMzhJSGhDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQUZrSEZvejhsL3RkTndFdW9rTS9yZElUVFBST1BiOEZpOU10OGJCVzJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHeGlCeG1uNHprdUdnLytoRW0vcG9jUUVLSXRWcTR2bGxscXNzTGFjR1FnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPbURIZjJ3YW9VdTBKajUwQ2N1OTY4eHQ1dUFzS2xaZTJHRTZUU1ZWMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5jVGpJNngvcEc0RVoxdXI0cllMdVpRWmJXUzRDbGQ2L0J4bkp2TGNVVmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBxZS8wS3RXc3NjT2JwTWdaODhzd01KY2g4aXRlVmJrUnpwcGZvVVgzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDA3QmU1NkNXUEJKa0tFS3FoWUFPVW1SUVJiZ2dqeUpXanBXZzBnQzd5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp2OEdPR1pXMk44UlV5dXdhRnpCQXFuQkY0Tlh3Z3BNRlB4a3hNMUJTWDltK1ZYajdlWGpxckkrUU0xQ0UrTk9qanNiZ0N1eEYwSlc4Z2RBN245ZEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJUczVNTFlNWHpjaU5FaWN4VUFsd2pHZi8rNVpIRHNiYkdKcEVGSmgvWFRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfeXhzNTRLMlEwNkJOY0wtRkd1RzZRIiwicGhvbmVJZCI6Ijg2NGJiYjJlLTFlMzktNDhkNC05ZDMxLTA4NGI3NWE1ZjQ3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHb1NscGt2RnJ4bnFTWGNLOStqNjVxWitaczA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkpKdGtzWWY2OG1jTTkrUCtDT2haK2lJTXowPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1IOEZWNVlCIiwibWUiOnsiaWQiOiI5MTc0NzkxNDQzODk6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiflRFQU0gQkxBQ0tIQVQgSEFDS0VSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZWswYjhDRUw3L2lMSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzdjkxWXJ1NVBQS1UvUm9IY0tpR3NxTEJzTkVFcThUcVcwQmwvczFFbHdVPSIsImFjY291bnRTaWduYXR1cmUiOiJldFRXVHF1L2RWRmY5TzAreFZzM2VCL1ZuTTNZUFp1MmE2MVorQ2RETFpmM3d4Q2lXR2NCMXJGUm90bFBrWU9rR2doRUFVakt6dW9iamhmRDJ6b2lEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUTVjL3Y4SGdMb1ZPM1ZWdkVnVEpodnVmQXBzWjZlbExqdnpaZ3NBSCsyQWdqUTU3VU9ZRFIyTTFFbncvTmtLTmFaZks1b1BNcTdoRU5wVUhMVzgxRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc0NzkxNDQzODk6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDcvZFdLN3VUenlsUDBhQjNDb2hyS2l3YkRSQkt2RTZsdEFaZjdOUkpjRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTYxNzczOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMcDIifQ==
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.2.9' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

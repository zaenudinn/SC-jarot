global.you = ['6283143155277'] 
//Developer Bot
global.namebot = '꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐'
global.rowner = ['6283143155277', '6283143155277'] // Real Owner Bot
global.owner = ['6283143155277'] // Owner Bot
global.police = ['6283143155277'] // Police Bot
global.mods = ['6283143155277']  // Want some help?
global.prems = ['6283143155277'] // Premium user has unlimited limit

global.helper = ['6283143155277']
global.api = '45083080630f3830a5bed882'
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  males : 'https://malesin.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': 'pelitbetsihluwh',
}

global.socket = {
	qr: true,
	version: false,
	logger: true,
	retryMap: false,
	pendingMessage: false,
}

global.useMulti = false

global.media = 'https://telegra.ph/file/1a432751096d4d399a8c4.jpg'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/537edd58e7f8849a7dc50.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

//global sosialmedia oscar Jangan Di Ganti Kalo Bisa!!
global.sc = "⫹⫺"
global.sgc = 'https://chat.whatsapp.com/E77CjzqHBEm8ceGtsMjGBi'
global.gc = '⫹⫺ Nih Jangan Lupa Join https://chat.whatsapp.com/E77CjzqHBEm8ceGtsMjGBi'
global.instagram = '-'
global.ytowner = '-'
global.gc2 = '⫹⫺ Nih Jangan Lupa Join https://chat.whatsapp.com/Lm5icHSQ5rKHzYMlDHuuC5'
// Sticker WM
global.packname = '꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐'
global.author = '꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐'
global.wm = '© ꧁ᬊᶜʰᬁ𝙎𝙖𝙣𝙯-𝘽𝙤𝙩𝙙☠︎࿐'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

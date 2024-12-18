global.owner = ['6283121675788']  
global.mods = ['6283121675788'] 
global.prems = ['6283121675788']
global.nameowner = 'Shin'
global.numberowner = '6283121675788'
global.nomorown = '6283121675788'
global.sgc = 'https://chat.whatsapp.com/BMG78VLK9Tl46X19rCit3c'
global.namebot = '© Ashley-Ai'
global.mail = '' 
global.gc = 'https://chat.whatsapp.com/BMG78VLK9Tl46X19rCit3c'
global.fotomu = 'https://i.ibb.co.com/rHVV6DV/35404c89-4888-404c-926d-c9f9f1a082b7.jpg'
global.menu = 'https://i.ibb.co.com/rHVV6DV/35404c89-4888-404c-926d-c9f9f1a082b7.jpg' //image menu , but not work 
global.instagram = ''
global.wm = '© Ashley-Ai🍁'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Shin'
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'Btz-PlKsI'
global.xzn = 'katz'
global.lol = 'edbe8aace2459ff838de3f75'
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'ozhW29tt'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  lol: 'https://api.lolhuman.xyz',
  alya: 'https://api.alyachan.dev',
  btc: 'https://api.botcahx.eu.org',
  xzn: 'https://skizo.tech'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'Btz-PlKsI',
  'https://api.alyachan.dev': 'Rxtd3w',
  'https://skizo.tech': 'katz',
  'https://api.botcahx.eu.org': 'ozhW29tt'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

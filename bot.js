const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.js");
const fs = require("fs");
const db = require("croxydb");
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} Komut Var!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} İsimli Komut Aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let cstoken;
if (ayarlar.TOKEN) {
  cstoken = ayarlar.TOKEN;
}
if (process.env.TOKEN) {
  cstoken = process.env.TOKEN;
}
if (cstoken) {
  client.login(cstoken);
} else {
  console.log("Projeye Hiç Bir Bot Tokeni Yazılmamış!");
}

client.ayarlar = ayarlar

  
//Projenizi Bir Sanal Sunucu(VDS) veya Kendi Bilgisayarınıza Kuracak İseniz Bu Kısmı Silin!
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);
//Projenizi Bir Sanal Sunucu(VDS) veya Kendi Bilgisayarınıza Kuracak İseniz Bu Kısmı Silin!
  




client.on("ready", async () => {
  db.delete("urlsniper")
})


client.on("ready", async () => {
  const creq = require("request")
  db.delete("urlsniper")
setInterval(() => {
  if(db.get("urlsniper")){
    
  } else {
  if(ayarlar.durum === "true") {
    if(client.guilds.cache.get(ayarlar.sunucuID)){
  if (client.guilds.cache.get(ayarlar.sunucuID).features.includes('VANITY_URL')) {
    if(ayarlar.url){
      if(client.guilds.cache.get(ayarlar.sunucuID).vanityURLCode === ayarlar.url){
        db.set("urlsniper", ayarlar.url)
        const csLOG = client.channels.cache.get(ayarlar.log)
        if(csLOG){
          csLOG.send(ayarlar.url +" İsimli Özel URL Başarılı Bir Şekilde Alındı ve Bot Çalışmayı Durdurdu!")
        } else {
          console.log(ayarlar.url +" İsimli Özel URL Başarılı Bir Şekilde Alındı ve Bot Çalışmayı Durdurdu!")
        }
      } else {
    start()
      }
    } else {
      console.log('ayarlar.js Dosyasındaki url: "" Yazan Yere Lütfen Alınacak Özel URL Yazın!')
    }  
  } else {
    console.log("ID'si Girilen Sunucu 3. Seviye Bir Sunucu Olmadığı İçin Bot Başlatılamadı!")
  }
    } else {
      console.log("ID'si Girilen Sunucu Bulunamadığı İçin Bot Başlatılamadı!")
    }
  } else {
    console.log('Botu Başlatmak İçin ayarlar.js Dosyasındaki durum: "false" Yazan Yere false Yerine true Yazman Gerek!');
  }
  }
}, ayarlar.botHızı)
function start() {
  console.log(`${ayarlar.url} İsimli Özel Discord Sunucu URL'sini Almak İçin Bot Başladı!`)
  const url = {
      url: `https://discord.com/api/v8/guilds/${ayarlar.sunucuID}/vanity-url`,
      body: {
        code: `${ayarlar.url}`
      },
      json: true,
      method: 'PATCH',
      headers: {
        "Authorization": `Bot ${cstoken}`
      }
    };
    creq(url, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
    })
}
})
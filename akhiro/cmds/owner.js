module.exports.config = {
	name: "owner",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "John Arida",
	description: "Owner",
	commandCategory: "Others",
	cooldowns: 5
}

module.exports.run =  ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var callback = () => api.sendMessage(
  {body:`» 𝙊𝙬𝙣𝙚𝙧 𝙤𝙛 ${global.config.BOTNAME}  «\n➟ ${global.config.OWNER} \n❂ 𝘼𝙙𝙢𝙞𝙣 𝙐𝙞𝙙: ${global.config.OWNERID}\n♛ 𝘼𝙙𝙢𝙞𝙣 𝙁𝙗 𝙇𝙞𝙣𝙠:\n${global.config.FACEBOOK}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"),
event.messageID);
      return request(encodeURI(`https://graph.facebook.com/${global.config.OWNERID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };
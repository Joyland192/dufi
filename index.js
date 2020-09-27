const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
const token = process.env.token;

client.once('ready', () => {
	console.log("Bot Login.");
	client.user.setActivity(`두피쿤                                `);
});

client.on('message', (message) => {
	if (message.channel.id == `759689892174233611`) {
    	if (message.content === `다바피보`) {
    	    message.channel.send(`바부`);
		}
	}
});

client.login(token);
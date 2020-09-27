const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
//const token = process.env.token;

client.once('ready', () => {
	console.log("Bot Login.");
	client.user.setActivity(`두피쿤                                `);
});

client.on('message', (message) => {
	if (message.channel.id == `699698079355502634`) {
    	if (message.content === `다바피보`) {
    	    message.channel.send(`바부`);
		}
	}
});

client.login("NzQ0MTMzMTg2NDAwODEzMTM2.XzeyCA.3CkYPkUyeP4gim_BeDRxztbxWBI");
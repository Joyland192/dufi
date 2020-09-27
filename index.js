const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
const token = process.env.token;
const prefix = '+'

client.once('ready', () => {
	console.log("Bot Login.");
	client.user.setActivity(`${prefix}명령어                                `);
});

client.on('message', (message) => {
	const heherole = message.guild.roles.cache.find(role => role.name === '히히');
	const guildmember = message.mentions.members.first();
	const roleroom = client.channels.cache.get('740369706585948242');
	const defaultname = `두피봇`;
	const defaultavatarURL = `https://vignette.wikia.nocookie.net/pokemon/images/0/03/%EB%AA%A8%EB%8B%A4%ED%94%BC_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/340?cb=20170405013619&path-prefix=ko`
	if (message.channel.id == `759689892174233611`) {
    	if (message.content === `다바피보`) {
    	    message.channel.send(`바부`);
		}
		if (message.content === `${prefix}닉네임 재설정`) {
			if (message.author.id == `414266558974656518`) {
				client.user.setUsername(defaultname);
				message.channel.send(`닉네임을 성공적으로 변경했습니다.`);
			} else {
				message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
			}
		} else {
			if (message.content.startsWith(`${prefix}닉네임`)) {
				if (message.author.id == `414266558974656518`) {
					let changenickname = message.content.slice(`${prefix}닉네임 `.length);
					client.user.setUsername(changenickname);
					message.channel.send(`닉네임을 성공적으로 변경했습니다.`);
				} else {
					message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
				}
			}
		}
		if (message.content === `${prefix}프로필 재설정`) {
			if (message.author.id == `414266558974656518`) {
				client.user.setAvatar(defaultavatarURL);
				message.channel.send(`프로필을 성공적으로 변경했습니다.`);
			} else {
				message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
			}
		} else {
			if (message.content.startsWith(`${prefix}프로필`)) {
				if (message.author.id == `414266558974656518`) {
					let changeavatar = message.content.slice(`${prefix}프로필 `.length);
					client.user.setAvatar(changeavatar);
					message.channel.send(`프로필을 성공적으로 변경했습니다.`);
				} else {
					message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
				}
			}
		}
	}
	if (message.content.includes (`<@!744133186400813136>`)) {
		message.channel.send(`?`);
	}
	if (message.content.includes (`히히`)) {
		if (guildmember.roles.cache.some(role => role.name === '히히')) {
		
		} else {
			guildmember.roles.add(heherole);
			roleroom.send(`<@${message.author.id}> 히히 <#${message.channel.id}>`);
		}
	}
});

client.login(token);
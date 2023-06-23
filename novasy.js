const config = require("./config.json")
const SelfBotClient = require("./Client");
const SelfBot = new SelfBotClient(config.SelfBotToken);
const {Client, GatewayIntentBits,WebhookClient} = require('discord.js');
const client = new Client({ fetchAllMembers: true,intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.MessageContent
  ]}); 

  client.on('ready', async () => {
    SelfBot.on('ready', async () => {

  console.log(`${config.Username} adlı kullanıcı adını izliyorum, boşa düştüğü zaman sana etiket atacağım.`);

  setInterval(async () => {
    
     client.users.fetch(config.UserID).then(x => { // Novasy
        if(x.username === config.Username){ // Novasy
            return // Novasy
        }else{ // Novasy
            SelfBot.user.setUsername(config.Username, config.SelfBotPassword).then(async x =>{ // Novasy
                const Webhook = new WebhookClient({ url: config.WebhookLink }); // Novasy
                await Webhook.send({content : `${config.Username} kullanıcı adı başarıyla alındı. <@${SelfBot.user.id}>`}) // Novasy
                await process.exit(0) // Novasy
            }).catch(x => console.log(`${x} hatası yüzünden başaramadık abi`)) // Novasy
        } // Novasy
    }) // Novasy

  }, 0.01);

})
  })



SelfBot.login(config.SelfBotToken).catch(x => console.log(`${x} hatası yüzünden giriş yapamıyorum.`))
client.login(config.BotToken).catch(x => console.log(`${x} hatası yüzünden giriş yapamıyorum.`))
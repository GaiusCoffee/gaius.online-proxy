var proxy = require('redbird')({port: 80});
proxy.register("gaius.online", "http://localhost:5000");
proxy.register("cipherdungeon.gaius.online", "http://localhost:3000");
proxy.register("ffrpg3bot.gaius.online", "http://localhost:4000");

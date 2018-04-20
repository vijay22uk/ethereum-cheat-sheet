var geth = require("geth");
var options = {
    networkid: "10101",
    port: 30303,
    rpcport: 8545,
    mine: null
};

geth.start(options, function (err, proc) {
    if (err) return console.error(err);
    // get your geth on!
});

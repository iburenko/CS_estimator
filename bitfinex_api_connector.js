const WebSocket = require('ws');
const wss = new WebSocket('wss://api.bitfinex.com/ws/')

ticker = ""

var message = '{"event":"subscribe", "channel":"book", "pair":"BTCUSD", "prec":"P0", "length":"100"}';
var msg_trade = '{"event": "subscribe", "channel": "trades", "pair": "BTCUSD"}';

var fs = require('fs');

wss.on('open', function open() {
	wss.send(message);
});

wss.onmessage = (msg) => fs.appendFile("./orderbook_btcusd.dat", msg.data+"\n", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(msg.data);
}); 

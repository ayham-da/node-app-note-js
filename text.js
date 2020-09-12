const args = process.argv.slice(2);
const text = require('./formating-text.js')
const hilfe = require('./help.js');
const textY = args.toString()


text(textY)

var helpme = textY.search('--help')
if(helpme > -1){
    return hilfe()
}
else{
    return text(textY)
}
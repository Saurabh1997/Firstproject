const BlockCl = require('./block.js');

const block = new BlockCl.Block("Test Block");

block.generateHash().then((result) => {
    console.log(`Block Hash :  ${result.hash}`);
    console.log(`Block  :  ${JSON.stringify(result)}`);
}).catch((error) => { console.log(error) });
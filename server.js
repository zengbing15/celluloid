const { RPC } = require("ckb-js-toolkit");

const rpc = new RPC("http://localhost:8116");

async function main(){
const result = await rpc.get_tip();
console.log(result);
}

main();

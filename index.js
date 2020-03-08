const readline = require('readline')
const network  = require('brain.js')
const brain    = require('./brain.json')

const net = new network.recurrent.LSTM()

const q   = readline.createInterface({
  input : process.stdin,
  output: process.stdout
})

const _data = brain.map(item => ({
  input : item.ask,
  output: item.jawab
}));

net.train(_data, {
  iterations: 2000
})

q.question('[?] Pertanyaan : ', (_q) => {
  //let jawab = net.run(_q)
  console.log("[+] System     : " + net.run(_q))
})

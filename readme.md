# ethereum-cheat-sheet
ethereum cheat sheet




using geth console 
geth --datadir eth-data init genesis.json

# geth --datadir eth-data  console 2>console.log
# override port 
geth --rpc --rpcaddr "0.0.0.0" --rpcport "8545" --rpccorsdomain "*" --rpcapi "web3,eth" --datadir eth-data  --networkid 12345  console 2>console.log

geth --datadir eth-data --port 30304 --nodiscover --networkid 12345  console 2>console.log

geth --datadir eth-data  --networkid 12345  console 2>console.log
geth --rpc --rpcaddr "0.0.0.0" --rpcport "8545" --rpccorsdomain "*" --rpcapi "web3,eth"

172.16.24.32

enode://e41f13e728200331ff041efcec87becae18fdd59b0ce8bbee09ece36b1e7d6bbf945eba42ffaae27cc625886a47ab7a51af9f1ad887a59c4a6fb5e88140e644e@[172.16.24.32]:30303



**********************************************************
geth --rpc --rpccorsdomain "https://remix.ethereum.org"  --datadir eth-data  --networkid 12345  console 2>console.log
********** with account mining

geth --rpc --rpccorsdomain "https://remix.ethereum.org"  --datadir eth-data  --networkid 12345 --unlock 0 --mine 1










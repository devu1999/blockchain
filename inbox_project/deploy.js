const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,  bytecode} = require('./compile');

const provider = new HDWalletProvider(
	'business aim scheme spider cactus mercy whale canoe animal cable balcony poem',
	'https://rinkeby.infura.io/v3/6375426aa6f744099a798788ad3ae4d1'
);

const web3 = new Web3(provider);

const deploy = async() => {
	const accounts = await web3.eth.getAccounts();

	console.log('attempting to deploy from account', accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data:bytecode , arguments: ['Hi there']})
	.send({gas: '1000000', from : accounts[0] });

	console.log('Contract deployed to', result.options.address);
};
deploy();
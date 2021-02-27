require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan release night hospital include praise army gather'; 
let testAccounts = [
"0x1ad305592a37341aa812d93e3733a5a057dfff843e92fc2dc22849fe5b8dfb18",
"0x2fcdf3237af7774b28f0ef7c6298ff379c2d9378be27151414393146f479a7c2",
"0x71160abcd7ec1656dd29c0140e4bcf92cad21adbf3caaca41957c55753a935dc",
"0xb6b7f521b3f7ecfe3966c63b406f816f191392ddad2f1c0bbf6cc891c1814d0d",
"0x35660eb381d7f3d5c1a42c0c84f61904391e1e65b0f9a0d28a4a06cdff5d4645",
"0x78199464e902050167b186b7d64ed4601ff9cdad301757a8a78be7ea3a369050",
"0x1048da0f03c9b68f07f111d0d0005b05928f574739991eab0857f6a34db6eac6",
"0xacd89cc2675df1c4139d51fa0b8c26166a7fce57e0db969678407079edb56356",
"0x88a27228a3f581cc1b2d1080f79aa360e97917e20fbec147e718d7b6164a6d11",
"0xe6c68f4af3dc1c4a9c92f98ad9189be20987e1732ac662905ad84ca0f95f7a09"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

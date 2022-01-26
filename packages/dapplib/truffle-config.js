require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind million good arena onion token'; 
let testAccounts = [
"0x0b06d20529a4474826d4c03f66ce385724aff53aba35572fc73a7e9d538ba8e5",
"0x5ef624ae148cf79bd58abdb25179da7a45c29a18076d3610f62deb4812b9c7aa",
"0x9b49eba43d0530faaa19efde48c949af9697c432ea4037636b2a1757f1846700",
"0x6ebd154c460d8a74e606b639eef62a55280f4cd20e2399712cb6a38da099230e",
"0xb7af7735886d4869cad61b25f63e2f64562726432a056e7668887d2964ca4b88",
"0xfffc2dffe7665481c4bc24efbe363ebab23c9b5f8ef30842dc01a2529517a260",
"0x7197171e55faab8f814c1049031e3f456d8f7b14265737aa9c424a3f1b045155",
"0xae477f54ca30108eeb1b4bf0ff97f82c5f25e047036b6f9a85646e59a47c4200",
"0x79a4d90721e40b173d0e699badd5cf7fdd5c032c0323a12a377a7818e61adefe",
"0x258d351c5569bd836c0ea836632529570f54d8bd6de2acbad3c6e4965ac84427"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


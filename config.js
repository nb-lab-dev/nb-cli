const DEFAULT_NETWORK = process.env.NB_NETWORK || process.env.NB_ENV || 'mainnet';

if (process.env.NB_NETWORK && process.env.NB_ENV){
    console.log(`Warning: NB_NETWORK and NB_ENV are both set! We will use NB_NETWORK (${process.env.NB_NETWORK})\n`);
}

function getConfig(env) {
    let config;
    switch (env) {
    case 'production':
    case 'mainnet':
        config = {
            networkId: 'mainnet',
            nodeUrl: process.env.NB_MAINNET_RPC || 'https://www.nbblocks.cc:5080',
            walletUrl: process.env.NB_MAINNET_WALLET || 'https://www.nbwallet.cc',
            helperUrl: 'https://www.nbblocks.cc:3050',
            helperAccount: 'nb',
        };
        break;
    case 'development':
    case 'testnet':
        config = {
            networkId: 'testnet',
            nodeUrl: process.env.NB_TESTNET_RPC || 'https://rpc.testnet.nb.org',
            walletUrl: process.env.NB_TESTNET_WALLET || 'https://testnet.mynbwallet.com',
            helperUrl: 'https://helper.testnet.nb.org',
            helperAccount: 'testnet',
        };
        break;
    case 'custom':
        config = {
            networkId: 'custom',
            nodeUrl: process.env.NB_CUSTOM_RPC,
            walletUrl: process.env.NB_CUSTOM_WALLET,
            helperUrl: process.env.NB_CUSTOM_HELPER,
            helperAccount: process.env.NB_CUSTOM_TLA,
        };
        break;
    default:
        throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
    }
    config['initialBalance'] = '1' + '0'.repeat(24);
    return config;
}

module.exports = { getConfig, DEFAULT_NETWORK };

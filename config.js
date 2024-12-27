const DEFAULT_NETWORK = process.env.PEX_NETWORK || process.env.PEX_ENV || 'mainnet';

if (process.env.PEX_NETWORK && process.env.PEX_ENV){
    console.log(`Warning: PEX_NETWORK and PEX_ENV are both set! We will use PEX_NETWORK (${process.env.PEX_NETWORK})\n`);
}

function getConfig(env) {
    let config;
    switch (env) {
    case 'production':
    case 'mainnet':
        config = {
            networkId: 'mainnet',
            nodeUrl: process.env.PEX_MAINNET_RPC || 'https://www.pext.cc:5080',
            walletUrl: process.env.PEX_MAINNET_WALLET || 'https://www.pexwallet.cc',
            helperUrl: 'https://www.pext.cc:3050',
            helperAccount: 'pex',
        };
        break;
    case 'development':
    case 'testnet':
        config = {
            networkId: 'testnet',
            nodeUrl: process.env.PEX_TESTNET_RPC || 'https://rpc.testnet.pex.org',
            walletUrl: process.env.PEX_TESTNET_WALLET || 'https://testnet.mypexwallet.com',
            helperUrl: 'https://helper.testnet.pex.org',
            helperAccount: 'testnet',
        };
        break;
    case 'custom':
        config = {
            networkId: 'custom',
            nodeUrl: process.env.PEX_CUSTOM_RPC,
            walletUrl: process.env.PEX_CUSTOM_WALLET,
            helperUrl: process.env.PEX_CUSTOM_HELPER,
            helperAccount: process.env.PEX_CUSTOM_TLA,
        };
        break;
    default:
        throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
    }
    config['initialBalance'] = '1' + '0'.repeat(24);
    return config;
}

module.exports = { getConfig, DEFAULT_NETWORK };

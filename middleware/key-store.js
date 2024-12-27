const { keyStores } = require('pex-api-js');
const homedir = require('os').homedir();
const path = require('path');
const UnencryptedFileSystemKeyStore = keyStores.UnencryptedFileSystemKeyStore;

const CREDENTIALS_DIR = '.config/.pex-credentials';

module.exports = async function createKeyStore() {
    // TODO: use system keystores.
    const credentialsPath = path.join(homedir, CREDENTIALS_DIR);
    return { keyStore: new UnencryptedFileSystemKeyStore(credentialsPath) };
};

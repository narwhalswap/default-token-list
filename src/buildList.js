const { version } = require('../package.json');
const bsc = require('./tokens/bsc.json');
const bscTestnet = require('./tokens/bsc-testnet.json');
const matic = require('./tokens/matic.json');
const moonriver = require('./tokens/moonriver.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Narwhalswap Tokens',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://raw.githubusercontent.com/trustwallet/assets/master/dapps/narwhalswap.org.png',
    'keywords': [
      'narwhalswap',
      'default'
    ],
    tokens: [
      ...bsc,
      ...bscTestnet,
      ...matic,
      ...moonriver,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};

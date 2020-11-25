export const LOCAL_STORAGE_VERSION = "1";
export const MINIMUM_BALANCE = 0.001;

export const STATUS = {
  READY: 0,
  IN_PROGRESS: 1,
  ERROR: 2,
  SUCCESS: 3,
};

export const IMAGE_PATH = {
  icon: {
    eth: "/images/eth.png",
    moon: "/images/moon.png",
    brick: "/images/brick.png",
  },
  background: {
    optimism: "/images/optimismBackground.png",
    rinkeby: "/images/rinkebyBackground.png",
    brick: "/images/brickBackground.png",
    skale: "/images/skaleBackground.png",
    xDai: "/images/xDaiBackground.png",
    matic: "/images/maticBackground.png",
  },
  status: {
    transferDisabled: "/images/transferDisabled.png",
    dropdownDisabled: "/images/dropdownDisabled.png",
  },
  gifs: {
    loading: "/images/loading.gif",
    transfer: "/images/transfer.gif",
    dropdown: "/images/dropdown.gif",
    spinningGear: "/images/spinningGear.gif",
    ellipsis: "/images/ellipsis.gif",
  },
};

export const TOKENS = {
  4: {
    tokenName: "MOON",
    tokenIcon: IMAGE_PATH.icon.moon,
    tokenBackground: IMAGE_PATH.background.rinkeby,
    tokenAddress: "0x50C94BeCAd95bEe21aF226dc799365Ee6B134459",
    chainId: 4,
    name: "Rinkeby",
    color: "#EFC45C",
    ethProviderUrl: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
    blockchainExplorerURL: "https://rinkeby.etherscan.io/tx/{TRANSACTION_HASH}",
  },
  // 5: {
  //   tokenName: "ETH",
  //   tokenIcon: ethIcon,
  //   tokenBackground: ethBackground,
  //   tokenAddress: constants.AddressZero,
  //   chainId: 5,
  //   name: "Goerli",
  //   color: "#0091F2",
  //   ethProviderUrl: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  //   blockchainExplorerURL: "https://goerli.etherscan.io/tx/{TRANSACTION_HASH}",
  // },
  42: {
    tokenName: "BRICK",
    tokenIcon: IMAGE_PATH.icon.brick,
    tokenBackground: IMAGE_PATH.background.brick,
    tokenAddress: "0x4d4deb65DBC13dE6811095baba7064B41A72D9Db",
    chainId: 42,
    name: "Kovan",
    color: "#5b32a2",
    ethProviderUrl: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
    blockchainExplorerURL: "https://kovan.etherscan.io/tx/{TRANSACTION_HASH}",
  },
  // 61: {
  //   tokenName: "TOKEN",
  //   tokenIcon: ethIcon,
  //   tokenBackground: ethBackground,
  //   tokenAddress: "0xf502A7897a49A9daFa5542203746Bad6C6E86c11",
  //   chainId: 61,
  //   name: "ETC",
  //   color: "#01C853",
  //   ethProviderUrl: `https://www.ethercluster.com/etc`,
  //   blockchainExplorerURL:
  //     "https://blockscout.com/etc/mainnet/tx/{TRANSACTION_HASH}/token_transfers",
  // },
  // 100: {
  //   tokenName: "xBRICKS",
  //   tokenIcon: brickIcon,
  //   tokenBackground: xDaiBackground,
  //   tokenAddress: "0xf502A7897a49A9daFa5542203746Bad6C6E86c11",
  //   chainId: 100,
  //   name: "xDAI",
  //   color: "#01C853",
  //   ethProviderUrl: `https://xdai.poanetwork.dev`,
  //   blockchainExplorerURL:
  //     "https://blockscout.com/poa/xdai/tx/{TRANSACTION_HASH}/token_transfers",
  // },
  // 80001: {
  //   tokenName: "mTOKEN",
  //   tokenIcon: moonIcon,
  //   tokenBackground: maticBackground,
  //   tokenAddress: "0xf502A7897a49A9daFa5542203746Bad6C6E86c11",
  //   chainId: 80001,
  //   name: "Matic",
  //   color: "#2b6def",
  //   ethProviderUrl: `https://rpc-mumbai.matic.today`,
  //   blockchainExplorerURL:
  //     "https://mumbai-explorer.matic.today/tx/{TRANSACTION_HASH}/token_transfers",
  // },
  // 346750: {
  //   tokenName: "sTOKEN",
  //   tokenIcon: ethIcon,
  //   tokenBackground: skaleBackground,
  //   tokenAddress: "0xf502A7897a49A9daFa5542203746Bad6C6E86c11",
  //   chainId: 16,
  //   name: "SKALE",
  //   color: "#000000",
  //   ethProviderUrl: `https://dev-testnet-v1-1.skalelabs.com`,
  //   blockchainExplorerURL: null,
  // },
  // 108: {
  //   tokenName: "oMOON",
  //   tokenIcon: moonIcon,
  //   tokenBackground: optimismBackground,
  //   tokenAddress: "0x9313b03453730D296EC4A62b6f3Fc758A9D1d199",
  //   chainId: 108,
  //   name: "Optimism",
  //   color: "#F50025",
  //   ethProviderUrl: `https://connext.optimism.io`,
  //   blockchainExplorerURL: null,
  // },
};
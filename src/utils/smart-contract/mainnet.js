// import erc1155Abi from "utils/smart-contract/abi/erc1155.json";
export const config  = {
  chainName: 'ETH',
  chainId: '0x1',
  rpcUrls: [
    "https://api.mycryptoapi.com/eth",
    "https://rpc.flashbots.net/",
    "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
    "https://cloudflare-eth.com/",
    "https://mainnet-nethermind.blockscout.com/",
    "https://nodes.mewapi.io/rpc/eth",
    "https://main-rpc.linkpool.io/",
    "https://mainnet.eth.cloud.ava.do/",
    "https://ethereumnodelight.app.runonflux.io",
    "https://rpc.ankr.com/eth",
    "https://eth-rpc.gateway.pokt.network",
    "https://main-light.eth.linkpool.io",
    "https://eth-mainnet.public.blastapi.io"
  ],
  chainIdNumber: 1,
}
const TOKEN_ADDRESSES = {

};
export const mainnet = {
  config,
  TOKEN_ADDRESSES
}
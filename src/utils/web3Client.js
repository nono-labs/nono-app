import Web3 from 'web3';
import { SUPPORTED_CHAINS, NET_WORK_VERSION } from "@/utils/constant";
import { setAddress } from "@/store/modules/account";

export const init = async () => {
  
    let provider = window.ethereum;
    if (typeof provider !== 'undefined') {
 
        const reqAccounts = await provider?.request({
            method: "eth_requestAccounts",
        });
    } 
}
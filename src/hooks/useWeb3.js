import { useCallback, useMemo, useRef, useEffect } from "react";
import { ETH } from "@/utils/smart-contract";
import Web3 from "web3";
import { mainnet } from "@/utils/smart-contract/mainnet";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "@/store/modules/account";

const createWalletConnectProvider = () => {
    console.log('-----')
    return new WalletConnectProvider({
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        qrcode: true,
        rpc: {
            1: mainnet.config.rpcUrls[0],
        },
    });
};
let walletConnectProvider = createWalletConnectProvider();

const useWeb3 = () => {
    const web3 = useRef();
    const dispatch = useDispatch();
    const connectAfterReload = useCallback(async () => {
        console.log(walletConnectProvider.connector.connected, 'walletConnectProvider.connector.connected')
        const accounts = await window.ethereum?.request({ method: 'eth_accounts' });
        if (accounts?.length){

        }
        if (walletConnectProvider.connector.connected) {
            await walletConnectProvider.enable();
            let a = await walletConnectProvider.request({ method: 'eth_accounts' });
            console.log(a,'a')
        }
    }, [])
    useEffect(() => {
        connectAfterReload();
    }, [connectAfterReload]);
    const isMetamaskInstalled = useMemo(() => {
        if (typeof window === 'undefined') {
            return false
        }
        return window.ethereum;
    }, []);
    const getCurrentAddress = useCallback(() => {
        if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
            return;
        }
        const isWalletConnect = walletConnectProvider.connector.connected;
        return isWalletConnect ? walletConnectProvider.request({ method: 'eth_accounts' }) :
            window.ethereum.request({ method: 'eth_accounts' });

    }, [isMetamaskInstalled])
    const switchNetwork = useCallback(
        async (cancelCb) => {
            if (!isMetamaskInstalled) {
                return;
            }

            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: ETH.config.chainId }],
                });
            } catch (error) {
                if (error.code === 4001) {
                    cancelCb?.();
                }

                // This error code indicates that the chain has not been added to MetaMask.
                if (error.code === 4902) {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [ETH.config],
                    });
                } else {
                    throw error;
                }
                // handle other "switch" errors
            }
        },
        [isMetamaskInstalled],
    );
    const getNetworkChainID = useCallback(async () => {
        if (!isMetamaskInstalled && !walletConnectProvider.connector.connected) {
            return;
        }
        const isWalletConnect = walletConnectProvider.connector.connected

        return isWalletConnect
            ? await walletConnectProvider.request({ method: "eth_chainId" })
            : await window.ethereum.request({ method: "eth_chainId" });
    }, [isMetamaskInstalled]);
    const listenNetworkChange = useCallback(
        (cb) => {
            if (!isMetamaskInstalled) {
                return;
            }
            window.ethereum.on("chainChanged", cb);
        },
        [isMetamaskInstalled],
    );
    const disconnect = useCallback(async () => {
        if (!isMetamaskInstalled) {
            return;
        }
        return await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [{ eth_accounts: {} }],
        });
    }, [isMetamaskInstalled]);
    const listenAccountChange = useCallback(
        (cb) => {
            if (!isMetamaskInstalled) {
                return;
            }
            window.ethereum.on("accountsChanged", cb);
        },
        [isMetamaskInstalled],
    );
    const getWalletConnectChainId = useCallback(() => {
        return walletConnectProvider.chainId;
    }, []);
    const disconnectWalletConnect = useCallback(
        async () => {
            await walletConnectProvider.disconnect();
            walletConnectProvider = createWalletConnectProvider();
            console.log('disconnectWalletConnect')
        },
        [],
    );
    const listenWalletConnectSessionReject = useCallback((cb) => {
        return walletConnectProvider.connector.on(
            "disconnect",
            (error, payload) => {
                cb();
                walletConnectProvider = createWalletConnectProvider();
            },
        );
    }, []);
    const createWeb3Instance = useCallback(async () => {
        if (
            (!isMetamaskInstalled && !walletConnectProvider.connected) ||
            typeof window === "undefined"
        ) {
            return;
        }
        const isWalletConnect = walletConnectProvider.connector.connected
        return isWalletConnect
            ? walletConnectProvider.request({
                method: "eth_requestAccounts",
            })
            : await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            
    }, [isMetamaskInstalled]);
    return {
        isMetamaskInstalled,
        getCurrentAddress,
        switchNetwork,
        getNetworkChainID,
        listenNetworkChange,
        disconnect,
        listenAccountChange,
        getWalletConnectChainId,
        disconnectWalletConnect,
        listenWalletConnectSessionReject,
        createWeb3Instance
    }
}
export default useWeb3;

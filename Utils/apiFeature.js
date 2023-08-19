import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { MembershipABI, MembershipAddress } from "../Context/constants";


export const CheckIfWalletConnected = async () => {
  try {
    if(!window.ethereum) return console.log("Install Metamask")

    const accounts = await window.ethereum.request({
      method: "eth_accounts"
    });

    const firstAccount = accounts[0]
    return firstAccount;

  } catch (e) {
    console.log(e)
  }
}

export const connectWallet = async () => {
  try {
    if(!window.ethereum) return console.log("Install Metamask")

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0]
    return firstAccount;

  } catch (error) {
    console.log(e)
  }
}

export const connectingWithContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      MembershipAddress,
      MembershipABI,
      signer
    )

    return contract;
  } catch (error) {
    console.log(error)
  }
}
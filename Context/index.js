import React, { createContext, useContext, useEffect, useState } from 'react'
import { connectWallet, connectingWithContract } from '../Utils/apiFeature';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const [address, setAddress] = useState("");
  const [contractMembership, setContractMembership] = useState([]);
  const [free, setFree] = useState();
  const [userMembership, setUserMembership] = useState({})

   const fetchData = async() => {
    try {
      const freeTrail = localStorage.getItem("freeTrail");
      const FREE_TRAIL = JSON.parse(freeTrail);
      setFree(freeTrail)

      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAddress(connectAccount)
      //console.log(contract)

      const oneMonth = await contract.getMemberships(1)
      const sixMonth = await contract.getMemberships(2)
      const oneYear = await contract.getMemberships(3)

      contractMembership = [
        {
          membership_name: oneMonth?.name,
          membership_date: oneMonth?.date,
          membership_id: oneMonth?.id.toNumber(),
          membership_cost: ethers.utils.formatEther(
            oneMonth?.cost.toString(),
            "ether"
          )
        },
        {
          membership_name: sixMonth?.name,
          membership_date: sixMonth?.date,
          membership_id: sixMonth?.id.toNumber(),
          membership_cost: ethers.utils.formatEther(
            sixMonth?.cost.toString(),
            "ether"
          )
        },
        {
          membership_name: oneYear?.name,
          membership_date: oneYear?.date,
          membership_id: oneYear?.id.toNumber(),
          membership_cost: ethers.utils.formatEther(
            oneYear?.cost.toString(),
            "ether"
          )
        }
      ]
      console.log(contractMembership)
      setContractMembership(contractMembership)

      const userMembership = await contract.getUsermemberships(connectAccount)
      console.log(userMembership)

      userMembership = {
        addressUser: userMembership.addressUser.toLowerCase(),
        expiredate: userMembership.expiredate,
        cost: ethers.utils.formatUnits(userMembership.cost.toString(), "ether"),
        membershipId: userMembership.membershipId.toNumber(),
        id: userMembership.id.toNumber()
      }

      console.log(userMembership)

    } catch (error) {
      console.log(error)
    }
   }

   useEffect(() => {
    fetchData()
   }, [])

   const listMembership = async () => {
    const amount = 5;
    const MEMBERSHIP_NAME = "One Year"
    const MEMBERSHIP_COST = ethers.utils.parseUnits(
      amount.toString(),
      "ether"
    )
    const MEMBERSHIP_DATE = "July 30 2023";

    const contract = await connectingWithContract();
    const list = await contract.list(
      MEMBERSHIP_NAME,
      MEMBERSHIP_COST,
      MEMBERSHIP_DATE
    )

    await list.wait()
    console.log(list)
   }

  return (
    <StateContext.Provider
      value = {{
        listMembership
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
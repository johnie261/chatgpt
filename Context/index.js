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
      setUserMembership(userMembership)

       const proMember = JSON.stringify(userMembership)
       localStorage.setItem("Userdetails", proMember) 

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

   const buyMembership = async(memberShip_id) => {
    const contract = await connectingWithContract();
    const connectAccount = await connectWallet();
    setAddress(connectAccount)

    try {
      if(memberShip_id == 1) {
        const today = Date.now() + 2678400000;
        let date = new Date(today);
        const expireDate = data.toLocalDateString("en-US");
        const money = ethers.utils.parseEther("1")

        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expireDate.toString(),
          {
            value: money.toString(),
          },
        );

        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member")
        localStorage.setItem("freeTrail", freeTrail);
        console.log("Taken membership", mintTransaction)
        window.location.reload()
      } else if (memberShip_id == 2) {
        const today = Date.now() + 2678400000 * 6;
        let date = new Date(today);
        const expireDate = data.toLocalDateString("en-US");
        const money = ethers.utils.parseEther("3")

        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expireDate.toString(),
          {
            value: money.toString(),
          },
        );

        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member")
        localStorage.setItem("freeTrail", freeTrail);
        console.log("Taken membership", mintTransaction)
        window.location.reload()
      } else {
        const today = Date.now() + 2678400000 * 12;
        let date = new Date(today);
        const expireDate = data.toLocalDateString("en-US");
        const money = ethers.utils.parseEther("5")

        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expireDate.toString(),
          {
            value: money.toString(),
          },
        );

        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member")
        localStorage.setItem("freeTrail", freeTrail);
        console.log("Taken membership", mintTransaction)
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <StateContext.Provider
      value = {{
        listMembership,
        buyMembership,
        free,
        address,
        contractMembership,
        userMembership
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
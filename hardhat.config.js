// require("@nomicfoundation/hardhat-toolbox");


// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     hardhat: {
//       chainId: 31337,
//     },
//   },
// };


require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/EXvf4r_sjCfXD7Y2ufqTkztH-OG98aEG',
      accounts: [
        'e7cdcc8a8106f1b5f858635f26fb27b6e2cb54b7c8203afb0fc87dce74c29535'
      ],
     }
  }
};
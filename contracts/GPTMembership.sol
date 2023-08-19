// SPDX=License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GPTMembership is ERC721 {
  address public owner;
  uint256 public membershipTypes;
  uint256 public totalMemberships;

  string public MY_CONTRACT = "JHM";

  struct Membership {
    uint256 id;
    string name;
    uint256 cost;
    string date;
  }

  struct UserMembership {
    uint256 id;
    uint256 membershipId;
    address addressUser;
    uint256 cost;
    string expireDate;
  }

  mapping(address => UserMembership) UserMemberships;
  mapping(uint256 => Membership) Memberships;
  mapping(uint256 => mapping(address => bool)) public hasBought;
  mapping(uint256 => mapping(uint256 => address)) public membershipTaken;
  mapping(uint256 => uint256[]) membershipsTaken;

  modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call this function");
    _;
  }

  //pass name and symbol of our nft
  constructor(
    string memory _name, string memory _symbol
  ) ERC721(_name, _symbol) {
    owner = msg.sender;
  }

  //function to list membership
  function list(string memory _name, uint256 _cost, string memory _date)
    public onlyOwner(){
      membershipTypes++;
      Membership[membershipTypes] = Membership (
        membershipTypes,
        _name,
        _cost,
        _date
      )
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "../SavageToken.sol";


contract MockedSavageToken is SavageToken {
  constructor(
    string memory name_,
    string memory symbol_,
    address recipient_,
    uint256 amount_
  ) SavageToken(name_, symbol_, recipient_, amount_) {}

  function mint(uint256 amount) external returns (bool) {
    _mint(msg.sender, amount);
    return true;
  }
}

import config from "config";
import { Network } from "@utils";

const MockedSavageToken = artifacts.require("MockedSavageToken");
const SavageToken = artifacts.require("SavageToken");


function toMocked(value: string, isName: boolean): string {
  return (isName ? "Mocked" : "M") + value;
}

export = async function (_deployer, _network: Network, [_account]) {
  if (!config.SAVAGE_TOKEN.ADDRESS) {
    const SAVAGE_TOKEN_RECIPIENT = config.SAVAGE_TOKEN.PARAMS?.RECIPIENT || _account;
    const SAVAGE_TOKEN_AMOUNT = (config.SAVAGE_TOKEN.PARAMS?.AMOUNT || 1e18).toString();

    let savageTokenName = config.SAVAGE_TOKEN.PARAMS?.NAME || "SAVAGE Token";
    let savageTokenSymbol = config.SAVAGE_TOKEN.PARAMS?.SYMBOL || "SAVG";
    let savageTokenContract;

    if ([Network.TESTNET, Network.DEVELOPMENT].includes(_network)) {
      savageTokenContract = MockedSavageToken;
      savageTokenName = toMocked(savageTokenName, true);
    } else {
      savageTokenContract = SavageToken;
    }

    await _deployer.deploy(
      savageTokenContract,
      savageTokenName,
      savageTokenSymbol,
      SAVAGE_TOKEN_RECIPIENT,
      SAVAGE_TOKEN_AMOUNT
    );
  }

} as Migration;

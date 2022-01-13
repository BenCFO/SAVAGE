import config from "config";
import { inspect } from "util";

export = async function (_deployer) {
  console.log(inspect(config, false, null, true), "\n");
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 3e3));
} as Migration;

declare module "config" {
  export interface SavageTokenParams {
    readonly NAME: string;
    readonly SYMBOL: string;
    readonly RECIPIENT: string | null,
    readonly AMOUNT: string | number | null
  }

  export interface SavageToken {
    readonly ADDRESS: string | null;
    readonly PARAMS: SavageTokenParams | null;
  }

  export const INFURA_KEY: string;
  export const PRIVATE_KEY: string;
  export const POLYGONSCAN_KEY: string;
  export const MIGRATION_DIRECTORY: string;
  export const GAS_PRICE: number | string;
  export const SAVAGE_TOKEN: SavageToken;
}

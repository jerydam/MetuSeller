import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "[0xe11d0769b251103B2Cd716C2c25892d3bA5e6827]"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "[https://eth-goerli.g.alchemy.com/v2/S38K9fPG_R68KrnK1eG0h3lrtFNl5ZnV]",
  },
};
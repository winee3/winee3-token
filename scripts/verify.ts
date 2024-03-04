import { run } from "hardhat";
import { DEPLOYED_CONTRACT_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL, INITIAL_SUPPLY } from '../constants'

async function main() {
  await run("verify:verify", {
    address: DEPLOYED_CONTRACT_ADDRESS,
    constructorArguments: [
      TOKEN_NAME,
      TOKEN_SYMBOL,
      INITIAL_SUPPLY
    ]
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


import { ethers } from 'hardhat';
import { INITIAL_SUPPLY, TOKEN_NAME, TOKEN_SYMBOL } from '../constants'

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  const Winee3TokenFactory = await ethers.getContractFactory(TOKEN_NAME);
  const winee3Token = await Winee3TokenFactory.deploy(
    TOKEN_NAME, TOKEN_SYMBOL, INITIAL_SUPPLY
  );

  console.log(`${TOKEN_NAME} deployed to:`, await winee3Token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
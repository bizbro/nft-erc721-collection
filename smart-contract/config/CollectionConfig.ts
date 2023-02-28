import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ChanGirl',
  tokenName: 'ChanGirl',
  tokenSymbol: 'CNGL',
  hiddenMetadataUri: 'ipfs://QmXfNqJNmRXxtNQVf54HPSnnYgqZdyZFTreEJCGomPk5pt/hidden_metadata.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.080,
    maxMintAmountPerTx: 40,
  },
  publicSale: {
    price: 0.08,
    maxMintAmountPerTx: 100,
  },
  contractAddress: "0xC691A29477B363b31360a04B8316d69C913c9D97",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

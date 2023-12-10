## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

### Deploy command

```shell
# For Scroll Sepolia
$ forge script ./script/Deployer.s.sol:DeployerScript --rpc-url $SCROLL_SEPOLIA_RPC_URL --broadcast -vvvv --private-key $PRIVATE_KEY --legacy
# For Celo Alfajores
$ forge script ./script/Deployer.s.sol:DeployerScript --rpc-url $CELO_ALFAJORES_RPC_URL --broadcast -vvvv --private-key $PRIVATE_KEY
# For Base Goerli
$ forge script ./script/Deployer.s.sol:DeployerScript --rpc-url $BASE_GOERLI_RPC_URL --broadcast -vvvv --private-key $PRIVATE_KEY
# For Arbitrum Goerli
$ forge script ./script/Deployer.s.sol:DeployerScript --rpc-url $ARBITRUM_GOERLI_RPC_URL --broadcast -vvvv --private-key $PRIVATE_KEY --legacy
# For Linea Goerli
$ forge script ./script/Deployer.s.sol:DeployerScript --rpc-url $LINEA_GOERLI_RPC_URL --broadcast -vvvv --private-key $PRIVATE_KEY
# For Mantle Testnet
$ forge script ./script/Deployer.s.sol:DeployerScript --rpc-url $MANTLE_TESTNET_RPC_URL --broadcast -vvvv --private-key $PRIVATE_KEY
```


### Verify command

```shell

# For Scroll Sepolia
forge verify-contract $SCROLL_CIPHERINBOX_CONTRACT_ADDRESS ./src/CipherInbox.sol:CipherInbox \
  --verifier-url https://api-sepolia.scrollscan.com/api \
  --etherscan-api-key $SCROLLSCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

forge verify-contract $SCROLL_CIPHERINBOXREGISTRY_CONTRACT_ADDRESS ./src/CipherInboxRegistry.sol:CipherInboxRegistry \
  --verifier-url https://api-sepolia.scrollscan.com/api \
  --etherscan-api-key $SCROLLSCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

# For Celo Alfajores
forge verify-contract $CELO_CIPHERINBOX_CONTRACT_ADDRESS ./src/CipherInbox.sol:CipherInbox \
  --verifier-url https://api-alfajores.celoscan.io/api \
  --etherscan-api-key $CELOSCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

forge verify-contract $CELO_CIPHERINBOXREGISTRY_CONTRACT_ADDRESS ./src/CipherInboxRegistry.sol:CipherInboxRegistry \
  --verifier-url https://api-alfajores.celoscan.io/api \
  --etherscan-api-key $CELOSCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

# For Base Goerli
forge verify-contract $BASE_CONTRACT_ADDRESS ./src/CipherInboxRegistry.sol:CipherInboxRegistry \
  --verifier-url https://api-goerli.basescan.org/api \
  --etherscan-api-key $BASESCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

# For Arbitrum Goerli
forge verify-contract $ARBI_CIPHERINBOX_CONTRACT_ADDRESS ./src/CipherInbox.sol:CipherInbox \
  --verifier-url https://api-goerli.arbiscan.io/api \
  --etherscan-api-key $ARBISCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

forge verify-contract $ARBI_CIPHERINBOXREGISTRY_CONTRACT_ADDRESS ./src/CipherInboxRegistry.sol:CipherInboxRegistry \
  --verifier-url https://api-goerli.arbiscan.io/api \
  --etherscan-api-key $ARBISCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

# For Linea Goerli
forge verify-contract $LINEA_CONTRACT_ADDRESS CipherInboxRegistry \
  --verifier-url https://api-testnet.lineascan.build/api \
  --etherscan-api-key $LINEASCAN_API_KEY \
  --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

# For Mantle Testnet
forge verify-contract $MANTLE_CIPHERINBOX_CONTRACT_ADDRESS ./src/CipherInbox.sol:CipherInbox \
    --verifier blockscout --watch \
	--verifier-url "https://explorer.testnet.mantle.xyz/api?module=contract&action=verify" \
    --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

forge verify-contract $MANTLE_CIPHERINBOXREGISTRY_CONTRACT_ADDRESS ./src/CipherInboxRegistry.sol:CipherInboxRegistry \
    --verifier blockscout --watch \
	--verifier-url "https://explorer.testnet.mantle.xyz/api?module=contract&action=verify" \
    --constructor-args $(cast abi-encode "constructor(address)" $DEPLOYER_ADDRESS)

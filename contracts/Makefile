verify_scroll_sepolia:
	forge verify-contract $(SCROLL_CONTRACT_ADDRESS) CipherInbox \
		--verifier-url https://api-sepolia.scrollscan.com/api \
		--etherscan-api-key $(SCROLLSCAN_API_KEY) \
		--constructor-args "$(call abi-encode, 'constructor(address)', $(DEPLOYER_ADDRESS))"


verify_on_Mantle:
	forge verify-contract --verifier blockscout --watch \
	--verifier-url "https://explorer.testnet.mantle.xyz/api?module=contract&action=verify" \
	--compiler-version "v0.8.19+commit.7dd6d404" \
	--num-of-optimizations 200 \
	--chain 5001 \
	0x485247D991959C04A2D80a625647adD3Ce45CE6C ./contracts/src/Marketplace.sol:Marketplace

original_verify_command_on_Mantle:
	forge verify-contract --verifier blockscout --watch \
	--verifier-url "https://explorer.testnet.mantle.xyz/api?module=contract&action=verify" \
	--compiler-version "v0.8.19+commit.7dd6d404" \
	--num-of-optimizations 200 \
	--constructor-args $(cast abi-encode <constructor> <param>)
	--chain 5001 \
	<your contract address> <path>:<contract>

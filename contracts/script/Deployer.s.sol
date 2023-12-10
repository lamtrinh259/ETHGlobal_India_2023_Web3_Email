// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/CipherInboxRegistry.sol";
import "../src/CipherInbox.sol";

contract DeployerScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        CipherInbox cipherinbox = new CipherInbox(msg.sender);
        CipherInboxRegistry cipherinboxregistry = new CipherInboxRegistry();

        vm.stopBroadcast();
    }
}

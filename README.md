# Ethers.js by Example
Learn how to use ethers.js from these examples

## Technology Stack & Tools

- Javascript (Writing scripts)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Node.js](https://nodejs.org/en/) (To run our scripts and install ethers.js)
- [Infura](https://infura.io/) (Node provider)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ npm install
```

## Ethers.js scripts

### 1_accounts.js - Reads balance of ether of wallet address
- Input your infura project ID 
```
$ node examples/1_accounts.js
```

### 2_create_wallet.js - Create wallet
```
$ node examples/2_create_wallet.js
```

### 3_send_signed_transaction.js - Transfers 0.0025 ether from account1 to account2
- Input your infura project ID 
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key
```
$ node examples/3_send_signed_transaction.js
```

### 4_inspecting_blocks.js - Get transactions from block
- Input your infura project ID 
```
$ node examples/4_inspecting_blocks.js
```
const { ethers } = require("ethers");

const main = async () => {
    const wallet = await ethers.Wallet.createRandom();
    console.log(`\nPrivateKey : ${wallet.privateKey}`)
    console.log(`\nAddress : ${wallet.address}`)
    console.log(`\nMnemonic : ${wallet._mnemonic().phrase}`)
}

main()


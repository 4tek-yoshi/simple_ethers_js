const { ethers } = require("ethers");

const INFURA_ID = 'a515e6528b8d45c3a5e0e8c449223530'
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const account1 = '0x2dA146d84de27c3e7d6F0c26495eeDBf6E119741' // Your account address 1
const account2 = '0x9fb7B0CD45Cd4943366D3B5882Dd530F05eCD691' // Your account address 2

const privateKey1 = '563b5b86eb2e7e680a175e1eff42cda372ccae20c2c26510069a468ef7d77980' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.0025")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()
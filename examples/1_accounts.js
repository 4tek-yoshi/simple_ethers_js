const { ethers } = require("ethers");

const INFURA_ID = 'a515e6528b8d45c3a5e0e8c449223530'
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const address = '0x2dA146d84de27c3e7d6F0c26495eeDBf6E119741'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`ETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}
main()
import { ethers } from "ethers";
export const abi = [
    'function getAmountsOut(uint amountIn, address[] memory path) public view returns(uint[] memory amounts)',
    'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
    "function getPair(address tokenA, address tokenB) external view returns (address pair)",
    "function allPairs(uint) external view returns (address pair)"
]
export const tokenAbi = [
    'function approve(address spender, uint256 amount) external returns (bool)'
]


//get RPC JSON provider

const tokens = [
    { WBNB: "" },
    { ABLC: "" },
    { BUSD: "" }
]
const usdt = "0x55d398326f99059fF775485246999027B3197955";
export const PancakeRouter = "0x10ed43c718714eb63d5aa57b78b54704e256024e";
export const ablc = "0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF"
export const bnb = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
export const busd = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
const signer = provider.getSigner()

export const getAmountsOut = async (amountAblc) => {
    console.log("going")
    const abi = [
        "function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[] amounts)"
    ];
    let amounts = []
    const contract = new ethers.Contract(PancakeRouter, abi, provider);
    await contract.functions.getAmountsOut(amountAblc, [ablc, usdt]).then(res => {
        amounts.push(res[0][0].toString())
        amounts.push(res[0][1].toString())
    })
        .catch(err => console.log(err));

    return amounts
    //  console.log("result", result);
}
export async function approve(amount, address,) {
    const abi = [
        "function approve(address spender, uint256 amount) returns (bool)"
    ];
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.functions.approve(PancakeRouter.toString(), amount.toString());

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}

export const getAmountsOutAblc = async (amountAblc) => {
    console.log(amountAblc)
    console.log("going")
    const abi = [
        "function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[] amounts)"
    ];
    let amounts = []
    const contract = new ethers.Contract(PancakeRouter, abi, provider);
    await contract.functions.getAmountsOut(amountAblc, [ablc, usdt]).then(res => {
        amounts.push(res[0][0].toString())
        amounts.push(res[0][1].toString())
        console.log({ amounts })
    })
        .catch(err => console.log(err));
    let amountsBnb = []
    console.log(converter(amounts[1]))
    await contract.functions.getAmountsOut(amounts[1], [usdt, bnb]).then(res => {
        amountsBnb.push(res[0][0].toString())
        amountsBnb.push(res[0][1].toString())
        console.log({ amountsBnb })
    }
    ).catch((err) => {
        console.log(err)
    })
    let amountsBusd = []
    await contract.functions.getAmountsOut(amounts[1].toString(), [usdt, busd]).then(res => {
        amountsBusd.push(res[0][0].toString())
        amountsBusd.push(res[0][1].toString())
        console.log({ amountsBusd })
    }
    ).catch((err) => {
        console.log(err)
    })

    return { amountsBusd, amountsBnb }
    //  console.log("result", result);
}

export const converter = (value) => {
    return (parseFloat(value) / 10000000000).toString()
}


export async function SwapperMain(router, tokenA, tokenB, amountIn, amountOutMin) {
    const abi = [
        'function getAmountsOut(uint amountIn, address[] memory path) public view returns(uint[] memory amounts)',
        'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
        "function getPair(address tokenA, address tokenB) external view returns (address pair)",
        "function allPairs(uint) external view returns (address pair)",
        "function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)"
    ]

    //const router = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";  ///for both mainet and testnet
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const walletAddress = await provider.getSigner().getAddress()
    console.log({ walletAddress })
    async function getTokenAmountsOut(amountIn, tokenA, tokenB) {
        const routerContract = new ethers.Contract(PancakeRouter, abi, signer);
        const TokenAamountIn = ethers.utils.parseUnits(amountIn, 18);
        let amounts = await routerContract.getAmountsOut(TokenAamountIn, [tokenA, tokenB])
        const TokenBamountOutMin = amounts[1].sub(amounts[1].div(10));
        const amountsOut = [ethers.utils.formatEther(TokenAamountIn), ethers.utils.formatEther(TokenBamountOutMin)]
        return amountsOut
    }
    async function ApproveToken(tokenA, amountIn) {
        const busdContract = new ethers.Contract(tokenA, tokenAbi, signer)
        const approveTx = await busdContract.approve(PancakeRouter, amountIn);
        let reciept = await approveTx.wait();
        console.log(reciept);
    }

    async function swapToken(amountIn, amountOutMin, tokenA, tokenB) {
        const walletAddress = await provider.getSigner().getAddress()
        console.log({ PancakeRouter, abi, amountIn, amountOutMin, walletAddress, tokenA, tokenB })
        const routerContract = new ethers.Contract(PancakeRouter, abi, signer);
        let receipt;
        if (tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
            const swapTx = await routerContract.swapExactTokensForETH(amountIn, amountOutMin, [tokenA, tokenB], walletAddress, Date.now() + 1000 * 60 * 10, { gasLimit: 350000 })
            receipt = await swapTx.wait();

        } else {
            const swapTx = await routerContract.swapExactTokensForTokens(amountIn, amountOutMin, [tokenA, tokenB], walletAddress, Date.now() + 1000 * 60 * 10, { gasLimit: 350000 })
            receipt = await swapTx.wait();
        }

        console.log(receipt);
    }


    async function mainSwap(amountIn, tokenA, tokenB, amountOutMin) {
        ApproveToken(tokenA, amountIn).then((res) => {
            swapToken(amountIn, amountOutMin, tokenA, tokenB).then((res) => {
                alert("TX success")
            });
        })

    }

    mainSwap(amountIn, tokenA, tokenB, amountOutMin);

}

//export const DEADLINE = currentTime + 1200;


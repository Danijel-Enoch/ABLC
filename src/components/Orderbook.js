import React, { useEffect } from 'react'
import "./P2P.css";
import { createPair, ablcPrice } from "../sdk/p2p"
import logoysnhlq1 from "./assets/logo_ysnhlq 1.png";
import btnbg from "./assets/btn-bg.png";
import Ellipse1 from "./assets/Ellipse 1.png";
import Vector1 from "./assets/Vector 1.png";
import Vector2 from "./assets/Vector 2.png";
import usdt from "./assets/usdt.png";
import dbas2 from "./assets/dbas2.png";
import dbas3 from "./assets/dbas3.png";
import dbas4 from "./assets/dbas4.png";
import dbas1a from "./assets/dbas1a.png";
import dbas1b from "./assets/dbas1b.png";
import dbas1c from "./assets/dbas1c.png";
import p2pg1 from "./assets/p2p-g-1.png";
import p2pg2 from "./assets/p2p-g-2.png";
import p2pg3 from "./assets/p2p-g-3.png";
import p2pg4 from "./assets/p2p-g-4.png";
import p2pg5 from "./assets/p2p-g-5.png";
import p2pg6 from "./assets/p2p-g-6.png";
import p2pg7 from "./assets/p2p-g-7.png";
import p2pg8 from "./assets/p2p-g-8.png";
import p2pg9 from "./assets/p2p-g-9.png";
import p2ph1 from "./assets/p2p-h-1.png";
import p2ph2 from "./assets/p2p-h-2.png";
import p2ph3 from "./assets/p2p-h-3.png";
import p2ph4 from "./assets/p2p-h-4.png";
import p2ph5 from "./assets/p2p-h-5.png";
import p2ph6 from "./assets/p2p-h-6.png";
import peakpx1 from "./assets/peakpx 1.png";
import Rectangle8 from "./assets/Rectangle 8.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import btnbg from "./assets/btn-bg.png";
import { useState } from 'react';
// import React, { useState } from "react";
import { updateOrder } from '../sdk/apiSDK'
import { busd, ablc } from '../sdk/swap'
import axios from 'axios'
import { Exchange } from '../sdk/p2p'
import truncateEthAddress from 'truncate-eth-address'
import { ethers } from 'ethers';

export default function Orderbook() {
    const [table, setTable] = useState()
    const [showOrder, setShowOrderBookType] = useState(false)


    const identifyToken = (address) => {
        if (address === busd) {
            return "BUSD"
        }
        if (address === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
            return "WBNB"
        }
        if (address === "0x55d398326f99059fF775485246999027B3197955") {
            return "USDT"
        }
        if (address === ablc) {
            return "ABLC"
        }
    }
    const converter = (amount, token) => {
        return token === "0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF" ? parseInt(parseFloat(amount.toString()) / 100) : (parseFloat(amount.toString()) * 10000000000).toFixed(2)
    }
    const converterSell = (amount, token) => {
        return token === "0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF" ? parseInt(parseFloat(amount.toString()) / 10) : amount
    }
    const tokenPaire = (base, quote) => {
        const TokenA = identifyToken(base);
        const tokenB = identifyToken(quote);

        return TokenA + "/" + tokenB
    }
    function buy(walletAddress, tokenA, tokenB, Base, quote, Oid, TxId) {
        const cquote = converter(quote, tokenB);
        const pair = tokenPaire(tokenA, tokenB)
        return <>
            <div class="p2p-c-box-div2a">
                <div key={TxId} class="p2p-c-box-div1a"><p>{truncateEthAddress(walletAddress)}</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>{pair}</p></div>
                <div class="p2p-c-box-div1c"><p>{converter(Base, tokenA)}</p></div>
                <div class="p2p-c-box-div1d"><p>{quote}</p></div>
                <div class="p2p-c-box-div1e"><button onClick={() => {
                    Exchange(walletAddress, Oid, tokenB, cquote.toString()).then((res) => {
                        updateOrder(TxId)
                        alert("Tx Successful")
                    }).catch((err) => {
                        console.log(err)
                        alert("Tx Error")
                    })
                }
                } className="bn29 " id="">buy</button></div>

            </div>
        </>
    }
    function sell(walletAddress, tokenA, tokenB, Base, quote, Oid, TxId, key) {
        const pair = tokenPaire(tokenA, tokenB)
        return (
            <div class="p2p-c-box-div2a">
                <div key={key + TxId} class="p2p-c-box-div1a"><p>{truncateEthAddress(walletAddress)}</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>{pair}</p></div>
                <div class="p2p-c-box-div1c"><p>{converter(Base, tokenA)}</p></div>
                <div class="p2p-c-box-div1d"><p>{quote}</p></div>
                <div class="p2p-c-box-div1e">
                    <button onClick={() => {
                        Exchange(walletAddress, Oid, tokenB, quote).then((res) => {
                            updateOrder(TxId)
                            alert("Tx Successful")
                        }).catch((err) => {
                            console.log(err)
                            alert("Tx Error")
                        })
                    }
                    } className="bn29 " id="">Sell</button>
                </div>

            </div>
        )
    }
    useEffect(() => {
        const baseUrl = "https://ablc.onrender.com/v1/indexer/data/ord"
        const options = {
            method: 'GET',
            url: baseUrl,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            }
        };
        axios
            .request(options)
            .then(function (response) {
                setTable(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })

        console.log(table)
    }, [])
    const [color, setColor] = useState(<button>Sell</button>);
    return (
        <div class="p2p-c">
            <div class="p2p-c-head">
                <span class="p2p-c-head-line1 p2p-b-div1-active">Trending Exchange Pairs</span>
                <span class="p2p-c-head-line2">Analyze trending cryptocurrency exchange pairs.</span>

            </div>
            <div class="p2p-c-button">
                <button onClick={() => setShowOrderBookType(false)}>Sell</button>
                <button onClick={() => setShowOrderBookType(true)}>Buy</button>
            </div>
            <div class="p2p-c-box">
                <div class='p2p-c-box-div1'>
                    <div class="p2p-c-box-div1a"><p>Wallet ID</p></div>
                    <div class="p2p-c-box-div1b"><p>Token Pair</p></div>
                    <div class="p2p-c-box-div1c"><p>Base</p></div>
                    <div class="p2p-c-box-div1d"><p>Quote</p></div>
                    <div class="p2p-c-box-div1e"><p>TX</p></div>
                </div>
                <div class="p2p-c-box-div2">
                    {!table ? <>NO Trade yet</> : <>
                        {
                            table.map((el, i) => {
                                if (el.tx === "false") {
                                    // console.log({ id: el.id, Oid: el.Oid, i })
                                    if (showOrder === false) {
                                        if (el.orderType === "sell") {
                                            return <>
                                                {
                                                    sell(el.creator, el.tokenA, el.tokenB, el.baseAmount, el.quoteAmount, el.Oid, el.id)
                                                }
                                            </>
                                        }
                                    }
                                    else {
                                        if (el.orderType === "buy") {
                                            return <>
                                                {
                                                    buy(el.creator, el.tokenA, el.tokenB, el.baseAmount, el.quoteAmount, el.Oid, el.id)
                                                }
                                            </>
                                        }
                                    }
                                }

                            })
                        }

                    </>}
                </div>
            </div>
        </div>
    )
}

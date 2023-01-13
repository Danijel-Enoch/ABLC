import React, { useEffect } from 'react';
import "./P2P.css";
import { createPair, ablcPrice, UsdtPrice, BnbPrice, BusdPrice, allowance } from "../sdk/p2p"
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
import Orderbook from './Orderbook';
import { Await } from 'react-router-dom';
// import React, { useState } from "react";

function P2P() {
    const [tokeA, setTokenA] = useState("0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF");
    const [tokenB, setTokenB] = useState("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56");
    const [baseAmount, setBaseAmount] = useState();
    const [quoteAmount, setQuoteAmount] = useState();
    const [mode, setMode] = useState("buy");
    const [color, setColor] = useState(<button>Sell</button>);
    const [price, setPrice] = useState(0)
    const [dPrice, setDPrice] = useState(0);
    const [impact, setImpact] = useState(0.001)


    // useEffect(async () => {
    //     let p = await UsdtPrice()
    //     let d = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? await BusdPrice() : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? await BnbPrice() : await UsdtPrice()
    //     let percentImapct = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? 0.02 : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? 0.03 : 0.04
    //     setPrice(p)
    //     setDPrice(d)
    //     setImpact(percentImapct)

    // })

    //  allowance("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x6700dBF306a175E112ef2Dd8249d2181c3fAA31E", "0x4cBDDaA2f48dF41aCc17434180892DB2B5ae93Cf")
    const Buy = async () => {
        //buy 1 for 0.04
        const cPrice = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? await BusdPrice() : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? await BnbPrice() : await UsdtPrice()
        const quoteAmountToGet = parseFloat(baseAmount) * cPrice
        await createPair("buy", tokeA.toString(), tokenB.toString(), baseAmount.toString(), quoteAmountToGet.toString())
            .then((res) => console.log({ res }))
            .catch((err) => console.log({ err }))
    }
    const Sell = async () => {
        //buy 0.04 for 1
        const cPrice = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? await BusdPrice() : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? await BnbPrice() : await UsdtPrice()
        const baseAmountToGet = parseFloat(quoteAmount) / cPrice
        // console.log("sell", tokenB.toString(), tokeA.toString(), quoteAmount.toString(), baseAmountToGet.toString())
        await createPair("sell", tokenB.toString(), tokeA.toString(), quoteAmount.toString(), baseAmountToGet.toString())
            .then((res) => console.log({ res }))
            .catch((err) => console.log({ err }))
    }
    const TransactOrder = async () => {
        if (tokeA || tokenB || baseAmount || quoteAmount) {
            console.log({ tokeA, tokenB, baseAmount, quoteAmount })
            if (mode === "buy") {
                await Buy()
            } else {
                await Sell()
            }
        } else {
            alert("INVALID INPUT VALUES")
        }
    }


    return (
        <>

            <div class="p2p-main">
                <div class="bg"><img src={peakpx1}></img></div>

                <div class="p2p-a">
                    <div class="p2p-a-nav">
                        <div class="p2p-a-nav-logo">
                            <img src={logoysnhlq1}></img>
                        </div>
                        <div class="p2p-a-nav-div2">
                            <span class='p2p-a-nav-div2-txt'>Light Paper</span>
                            <span class='p2p-a-nav-div2-txt'>Docs</span>
                            <div><ConnectButton /></div>
                        </div>
                    </div>
                    <div class='p2p-a-div1'>
                        <span class="p2p-a-div1-line1">ARABELLA P2P EXCHANGE</span>
                        <span class="p2p-a-div1-line2">Empowers You To Echange ABLC Tokens With BNB, BUSD & USDT With Other Traders Instantly.</span>
                        <div class="p2p-a-div1-line3">Liquidityless <span class="p2p-a-div1-line3-active">Buying & Selling of ABLC tokens</span> in no time.</div>
                    </div>

                </div>





                <div class="p2p-main-container">

                    <div class="p2p-b">
                        <div class="p2p-b-div1">
                            <span class="p2p-b-div1-active">ABLC</span> was built to ensure independent transfer of value between people.
                        </div>
                        <div class="p2p-b-div2">
                            <div class="p2p-b-box-main">
                                <div class="p2p-b-box1">
                                    <div class="p2p-b-box1-container">
                                        <div class="p2p-b-box-div1">
                                            <div class="p2p-b-box-div1a">
                                                <div class="p2p-b-box-div1a">
                                                    <input onChange={async (e) => {

                                                        const cPrice = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? await BusdPrice() : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? await BnbPrice() : await UsdtPrice()
                                                        const bPrice = parseFloat(e.target.value) * cPrice;
                                                        if (parseFloat(e.target.value) < 1) {
                                                            alert("Minimum ablc to trade is 1")
                                                        } else {
                                                            setBaseAmount(e.target.value)
                                                            setQuoteAmount(bPrice)
                                                        }
                                                        let p = await UsdtPrice()
                                                        let d = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? await BusdPrice() : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? await BnbPrice() : await UsdtPrice()
                                                        let percentImapct = tokenB === "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" ? 0.0002 : tokenB === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" ? 0.000003 : 0.000004
                                                        setPrice(p)
                                                        setDPrice(d)
                                                        setImpact(percentImapct)

                                                    }} type="text" class="p2p-b-box-div1a-line1" />
                                                    <span class="p2p-b-box-div1a-line2">${price ? price : 0}</span>
                                                </div>
                                            </div>
                                            <div class="p2p-b-box-div1b">
                                                <select onChange={(e) => {
                                                    setTokenA(e.target.value)
                                                }} class="p2p-b-box-div1b" >
                                                    <option class="p2p-b-box-div1b-img1" value="0x557a09f2a257e7ea0C9EdD45F4ABc1F5Eca05dfF"><span>ABLC</span><img class="p2p-b-box-div1b-img2" src={Vector1} /></option>
                                                </select>
                                            </div>

                                        </div>
                                        <div class="p2p-b-box-div1">
                                            <div class="p2p-b-box-div1a">
                                                <input onChange={async (e) => {
                                                    setQuoteAmount(e.target.value)

                                                }} value={quoteAmount} type="text" class="p2p-b-box-div1a-line1" />
                                                <span class="p2p-b-box-div1a-line2">${dPrice ? dPrice : 0}</span>
                                            </div>
                                            <select onChange={(e) => {
                                                setTokenB(e.target.value)
                                                console.log(e.target.value)
                                            }} class="p2p-b-box-div1b" >
                                                <option class="p2p-b-box-div1b-img1" value="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"><span>BUSD</span> <img src={Vector1} /></option>
                                                <option class="p2p-b-box-div1b-img1" value="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"><span>BNB</span><img src={Vector1} /></option>
                                                <option class="p2p-b-box-div1b-img1" value="0x55d398326f99059fF775485246999027B3197955"><span>USDT</span><img src={Vector1} /></option>
                                            </select>

                                        </div>
                                        <div class="p2p-b-box1-div2">
                                            <div class="p2p-b-box1-div2a">
                                                <p>Expected Output</p>
                                                <p>Price Impact</p>
                                            </div>
                                            <div class="p2p-b-box1-div2b">
                                                <p>999.1458764USDT</p>
                                                <span class="p2p-b-box1-div2b-txt">-{impact}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="p2p-b-box-main-div1">
                                    <button onClick={async () => {
                                        setMode("buy")
                                        await Buy()
                                    }} class="a">Buy Order</button>
                                    <button
                                        onClick={async () => {
                                            setMode("sell")
                                            await Sell()
                                        }}>Sell Order</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Orderbook />

                    <div class="p2p-d">
                        <div class="p2p-c-head">
                            <span class="p2p-c-head-line1">Why Choose <span class="p2p-c-head-line2-active">ABLC?</span></span>
                            <span class="p2p-c-head-line2">ABLC was built to ensure independent transfer of value between people. Just the way <span class="p2p-c-head-line2-active">Satoshi Nakamoto</span> wished.</span>
                        </div>

                        <div class="p2p-d-div2">
                            {/* 1/////////// */}
                            <div class='p2p-d-div2a'>
                                <div class="p2p-d-div2a-img">
                                    <img src={dbas2}></img>
                                </div>
                                <div class="p2p-d-div2a-head">
                                    <p>Safe and Secure</p>
                                </div>
                                <div class="p2p-d-div2a-para">
                                    <p>100% secured transactions with encrypted connections.</p>
                                </div>

                            </div>
                            {/* 2//////// */}
                            <div class='p2p-d-div2a'>
                                <div class="p2p-d-div2a-img">
                                    <img src={dbas3}></img>
                                </div>
                                <div class="p2p-d-div2a-head">
                                    <p>Instant Exchange</p>
                                </div>
                                <div class="p2p-d-div2a-para">
                                    <p>ABLC enables Crypto Enthusiasts to exchange value from their wallets.</p>
                                </div>

                            </div>
                            {/* 3////////////// */}
                            <div class='p2p-d-div2a'>
                                <div class="p2p-d-div2a-img">
                                    <img src={dbas4}></img>
                                </div>
                                <div class="p2p-d-div2a-head">
                                    <p>Expert Support</p>
                                </div>
                                <div class="p2p-d-div2a-para">
                                    <p>We offer all the resources you need for buying and selling crypto 24/7.</p>
                                </div>

                            </div>
                            {/* ////////// */}
                        </div>

                    </div>

                    <div class="p2p-e">
                        <div class="p2p-e-div1">
                            <span class="p2p-e-div1-line1">Start exchanging On ABLC</span>
                            <span class="p2p-e-div1-line2">Connect you wallet now to immediately start buying or selling Crypto, hassle-free.</span>
                        </div>
                        <div class='p2p-e-div2'>
                            <button>Connect Wallet</button>
                        </div>
                    </div>

                    <div class="p2p-d">
                        <div class="p2p-c-head">
                            <span class="p2p-c-head-line1">What Can You Do With <span class="p2p-c-head-line2-active">ABLC?</span></span>
                            <span class="p2p-c-head-line2">Elevate your financial freedom to a higher plane with ABLC.</span>
                        </div>

                        <div class="p2p-f-div2">
                            {/* 1/////////// */}
                            <div class='p2p-f-div2a'>
                                <div class="p2p-f-div2a-img">
                                    <img src={dbas1a}></img>
                                </div>
                                <div class="p2p-f-div2a-head">
                                    <p>Buy Crypto Online</p>
                                </div>
                                <div class="p2p-f-div2a-para">
                                    <p>Buy Crypto directly into your from the ABLC platform.</p>
                                </div>

                            </div>
                            {/* 2//////// */}
                            <div class='p2p-f-div2a'>
                                <div class="p2p-f-div2a-img">
                                    <img src={dbas1b}></img>
                                </div>
                                <div class="p2p-f-div2a-head">
                                    <p>Sell Crypto Anytime</p>
                                </div>
                                <div class="p2p-f-div2a-para">
                                    <p>Sell your Crypto at your rate, and get paid in one of numerous methods.</p>
                                </div>

                            </div>
                            {/* 3////////////// */}
                            <div class='p2p-f-div2a'>
                                <div class="p2p-f-div2a-img">
                                    <img src={dbas2}></img>
                                </div>
                                <div class="p2p-f-div2a-head">
                                    <p>Secure Escrow</p>
                                </div>
                                <div class="p2p-f-div2a-para">
                                    <p>Our Secure Escrow system protects users to ensure seamless exchange of value.</p>
                                </div>

                            </div>
                            {/* 4////////////// */}
                            <div class='p2p-f-div2a'>
                                <div class="p2p-f-div2a-img">
                                    <img src={dbas1c}></img>
                                </div>
                                <div class="p2p-f-div2a-head">
                                    <p>Non-custodial</p>
                                </div>
                                <div class="p2p-f-div2a-para">
                                    <p>WYou are in charge of your funds! Buy and Sell directly from your wallets and be on your way!</p>
                                </div>

                            </div>
                            {/* ////////// */}
                        </div>

                    </div>

                    <div class="p2p-h">
                        <div class="p2p-h-div1">
                            <div class="p2p-h-div1a">
                                <p>Fees</p>
                                <p>Terms of Services</p>
                                <p>Contact Us</p>
                                <p>Create an Offer</p>
                            </div>
                            <div class="p2p-h-div1b">
                                <p>Any inquires for ABLC - Contact <span class='p2p-h-div1b-active'>p2pablc@ablc.io</span></p>
                            </div>
                        </div>
                        <div class="p2p-h-div2">
                            <img src={p2ph1}></img>
                            <img src={p2ph2}></img>
                            <img src={p2ph3}></img>
                            <img src={p2ph4}></img>
                            <img src={p2ph5}></img>
                            <img src={p2ph6}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default P2P;

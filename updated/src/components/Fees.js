import React from 'react';
import "./Fees.css";
import Footer from "./Footer";
import logoysnhlq1 from "./assets/logo_ysnhlq 1.png";

function Fees()
{
    return(
        <>
        <div class="fees-main">
    <div class="fees-a">
        <div class="fees-a-nav-logo">
            <img src={logoysnhlq1}></img>
        </div>
    </div>

<div class="fees-b-container">
    <div class="fees-b-div1">
        <span>Fees Details</span>
    </div>
<div class="fees-b-div2">
<p>At ABLC, we aim to provide our users with a convenient and seamless experience while using our P2P DEX platform. However, in order to ensure the sustainability and maintenance of our platform, we have implemented a 0.05% transaction fee for all transactions on the platform. This fee applies to both buying and selling digital assets and will be charged at the time of the transaction.
</p>
<p>It's important to note that this fee is significantly lower than traditional centralized exchanges, which often charge fees of up to 1% or more. We have kept our fee structure as low as possible in order to provide our users with a more cost-effective option for buying and selling digital assets.
</p>
<p>By implementing this fee structure, we are able to cover the costs associated with maintaining and upgrading our platform, while still providing our users with competitively priced transaction fees. Additionally, any fund collected from the fees will be used to improve the platform, adding more features and improving the user experience.</p>
<p>We understand that fees are an important consideration for our users, and we will continue to evaluate and adjust our fee structure as necessary to ensure that it remains fair and reasonable. In the meantime, we appreciate your understanding and support in helping us keep ABLC P2P DEX platform running smoothly.</p>
</div>

</div>
</div>
<Footer/>
        </>
    )
}
export default Fees;
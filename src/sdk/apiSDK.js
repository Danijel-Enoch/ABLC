import axios from 'axios';
import abi from "./abis/p2p.json"

const baseUrl = "https://ablc.onrender.com/v1/indexer/data/ord"

const P2P_Contract = "0xe7349409245b3a3Bb71dbd6d7c22EBa83AeC1ce1";

export const getCreatedOrders = () => {
    let data;
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
            data = response.data
            console.log(response.data);
        })
        .catch(function (error) {
            data = error
            console.error(error);
        })


    return data

}


export function updateOrder(id) {
    let bodyContent = {
        "tx": "true"
    };

    let reqOptions = {
        url: baseUrl + "/" + id,
        method: "PATCH",
        data: bodyContent,
    }

    axios.request(reqOptions).then((res) => console.log(res.data)).catch((err) => console.log(err));

}
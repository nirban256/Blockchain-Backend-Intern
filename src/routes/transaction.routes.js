import { Router } from "express";
import axios from "axios";
import multer from "multer";
import { addUser } from "../controllers/transaction.controller.js";
// import {ApiResponse} from "../utils/ApiResponse.js";

const router = Router();

let user_address = "0xce94e5621a5f7068253c42558c147480f38b5e0d";

const coingecko_url = `${process.env.COINGECKO_URL}`;

let user_balance = BigInt(0);
let transactions = [];

const fetchTransactions = async (userAddress) => {
    try {
        let etherscan_url = `https://api.etherscan.io/api?module=account&action=txlist&address=${userAddress}&startblock=0&endblock=99999999&page=1&sort=asC&apikey=${process.env.ETHERSCAN_API_KEY}`;

        const response = await axios.get(etherscan_url);
        const data = response.data;

        transactions = data.result;
        return transactions;
    } catch (error) {
        throw new Error("Error fetching transactions: " + error.message);
    }
}

// create different functions for calculating balance of user and fetching price of ether.

const calculateBalance = async (user_address) => {
    const response = await fetchTransactions(user_address);

    response.forEach(e => {
        let val = BigInt(e.value);
        if (e.to === user_address) {
            user_balance += val;
        }
        if (e.to !== user_address) {
            user_balance -= val;
        }
    });

    return user_balance;
}

const upload = multer().none();

router.route("/balance").post(
    upload,
    addUser
);

router.route("/price").get(
    () => {
        axios.get(coingecko_url)
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch(err => {
                console.log("Error fetching data: ", err);
            });
    }
);

export default router;
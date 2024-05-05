import { Router } from "express";
import axios from "axios";

const router = Router();

const etherscan_url = `${process.env.ETHERSCAN_API_URL}${process.env.ETHERSCAN_API_KEY}`;
const coingecko_url = `${process.env.COINGECKO_URL}`;

router.route("/data").get(
    () => {
        axios.get(etherscan_url)
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
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
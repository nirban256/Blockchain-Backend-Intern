
# Crypto Transaction Fetcher Server

This server-side application fetches and manages crypto transactions for users, utilizing Node.js and MongoDB. It also periodically fetches the price of Ethereum and stores it in the database.

## Setup

**Clone the repository:**

```
git clone https://github.com/nirban256/Blockchain-Backend-Intern
cd Blockchain-Backend-Intern
```

**Install dependencies:**
```
npm install
```

**Set up environment variables:**
<br/>
Create a .env file in the root directory and add the following:

```
ETHERSCAN_API_KEY=<your_etherscan_api_key>
MONGODB_URI=<your_mongodb_uri>
```

**Start the server:**

```
npm start
```

**Usage**

Fetch Crypto Transactions
API Endpoint: /api/transactions/balance
Method: POST
Request Body:
```
{
  "address": "0xce94e5621a5f7068253c42558c147480f38b5e0d"
}
```
Response:
```
[
  {
    "hash": "0xabc123",
    "from": "0xsenderaddress",
    "to": "0xrecipientaddress",
    "value": "0.5 Ether",
    "timestamp": 1632546700
  },
  // More transactions...
]
```

**Dependencies**

```
Node.js
Express.js
Mongoose
Axios
dotenv
cors
```

**APIs Used**
```
Etherscan API
CoinGecko API
```

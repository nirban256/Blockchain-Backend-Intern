import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
    {
        blockNumber: {
            type: Number,
            required: true
        },
        timeStamp: {
            type: Number,
            required: true
        },
        hash: {
            type: String,
            required: true,
            unique: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        gas: {
            type: Number,
            required: true
        },
        gasPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const userSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
            unique: true
        },
        balance: {
            type: Number,
            default: 0
        },
        transactions: [transactionSchema] // Array of transactions
    },
    {
        timestamps: true
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
const User = mongoose.model('User', userSchema);

export { Transaction, User };
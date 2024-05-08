import mongoose, { Schema } from "mongoose";

const etherPriceSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const EthereumPrice = mongoose.model('EthereumPrice', etherPriceSchema);

export { EthereumPrice };

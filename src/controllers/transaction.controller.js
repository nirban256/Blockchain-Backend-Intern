import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Transaction, User } from "../model/transaction.model.js";

const addUser = asyncHandler(async (req, res) => {
    console.log(req);
    const { user_address } = req.body;

    if (
        [user_address].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "User address is required");
    }

    const existedUser = await User.findOne({
        $where: [user_address]
    });

    if (existedUser) {
        const response = await addTransactionsForUser(user_address);
        res.status(201).json(response);
    }

    const newUser = new User({
        user_address,
        balance: 0
    });

    await newUser.save();

    const response = await addTransactionsForUser(user_address);

    res.status(201).json(newUser, response);

});


const addTransactionsForUser = async (address) => {
    const existedUser = await User.findOne({
        $where: [address]
    });

    if (!existedUser) {
        throw new ApiResponse(404, "User does not exists");
    }



};

export { addUser };
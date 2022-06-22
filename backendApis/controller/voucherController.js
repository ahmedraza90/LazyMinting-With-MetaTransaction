const { formatResponse } = require("../helpers/utility")
const { InsertVoucher, getVoucher } = require("../services/voucherServices")

async function insertVoucher(req, res) {
    try {
        const response = await InsertVoucher(req.body);
        console.log(response)
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}

async function buyNFT(req, res) {
    try {
        const { id } = req.params
        const response = await buyNFT(id);
        console.log(response)
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}

module.exports={
    insertVoucher,
    buyNFT
    
}
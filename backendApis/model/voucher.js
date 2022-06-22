const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
    tokenId: {type: Number, required: true},
    nonce: {type: Number, required: true},
    price: {type: Number, required: true},
    Uri: {
        type: String,
        required: true,
    },
    signerAddress: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
        required: true,
    },
    
    

    
}, {timestamps: true});

module.exports = mongoose.model("voucher", voucherSchema);
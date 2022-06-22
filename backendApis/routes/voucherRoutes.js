const { router } = require("../app")
const voucherController = require("../controller/voucherController")


router.post('/',voucherController.insertVoucher)
router.get('/buy',voucherController.buyNFT)

module.exports = router
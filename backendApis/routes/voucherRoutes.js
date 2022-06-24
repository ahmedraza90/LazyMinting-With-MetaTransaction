const { router } = require("../app")
const voucherController = require("../controller/voucherController")


router.post('/',voucherController.insertVoucher)
router.post('/:id',voucherController.buyNFT)
router.get('/',voucherController.getNFT)

module.exports = router
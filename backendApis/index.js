const http = require("http");
const {app} = require("./app");
const server = http.createServer(app);
const bodyparser = require('body-parser')
const cors = require("cors");
const Voucher = require("./routes/voucherRoutes")

const port = process.env.PORT || 8000

app.use(cors());
app.use(Voucher)

app.listen(port, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})

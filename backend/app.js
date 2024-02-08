const express = require("express")
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
const { connectToDatabase } = require("./src/services/db/connect");

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./src/services/swagger/swagger.json')

const port = process.env.PORT || 5000;

const drinksRoute = require("./src/routes/drinks.route");
const vinesRoute = require("./src/routes/vines.route");
const dessertsRoute = require("./src/routes/desserts.route");
const discoveryRoute = require("./src/routes/menuDiscovery.route");
const escaleRoute = require("./src/routes/menuEscale.route");
const reservationsRoute = require("./src/routes/reservations.route");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello world !")
})

const startServer = async (port) => {
    connectToDatabase();
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

    app.use("/drinks", drinksRoute);
    app.use("/vines", vinesRoute);
    app.use("/desserts", dessertsRoute);
    app.use("/discovery", discoveryRoute);
    app.use("/reservations", reservationsRoute);
    app.use("/escale", escaleRoute);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

startServer(port);

module.exports = {
    app,
    startServer
}
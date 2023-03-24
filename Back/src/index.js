const app = require("./app")
const { sequelize } = require("./DB_connection")
const saveApiData = require("./controllers/saveApiData")

const PORT = 3001

app.listen(PORT, async () => {
    await sequelize.sync({ force: true })
    await saveApiData();
    console.log("in server http://localhost:3001")
})
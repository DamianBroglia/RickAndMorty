// const http = require("http")
// const PORT = 3001
// const characters = require("../utils/data.js")
// const { getCharById, getCharDetail } = require("../controllers/index")

// http.createServer(function (req, res) {
//     const allUrl = req.url.split("/")
//     const id = Number(allUrl.pop())
//     const url = allUrl.join("/")

//     switch (url) {
//         case "/onsearch":
//             return getCharById(res, id)
//         case "/detail":
//             return getCharDetail(res, id)


//         default:
//             res.writeHead(404, { "content-type": "text/plain" })
//             res.end("route not found")
//     }
// }).listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
// })
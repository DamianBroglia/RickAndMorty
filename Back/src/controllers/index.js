const axios = require("axios")

const getCharById = function (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((data) => data.data)
        .then((data) => {
            const character = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                id: data.id
            }
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify(character))
        }).catch((error)=>{
            res.writeHead(500, { "content-type": "text/plain" })
            res.end("Character not found")
        })
}

const getCharDetail = function (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((data) => data.data)
        .then((data) => {
            const character = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                id: data.id,
                status:data.status,
                origin:data.origin
            }
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify(character))
        }).catch((error)=>{
            res.writeHead(500, { "content-type": "text/plain" })
            res.end("Character not found")
        })
}
module.exports = {
    getCharById,
    getCharDetail
}
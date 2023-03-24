const axios = require("axios")
var fav = []

const getFav = function (req, res) {
    res.status(200).end(JSON.stringify(fav))
}
const postFav = function (req, res) {
    fav.push(req.body)
    console.log("post fav => ", fav);
    res.status(200).end(JSON.stringify(req.body))
}
const deleteFav = function (req, res) {
    const { id } = req.params
    const character = fav.find(e => e.id === Number(id))
    if (character) {
        fav = fav.filter(e => e.id !== Number(id))
        console.log("delete fav => ", fav);
        res.status(200).end(JSON.stringify(character))
    } else {
        res.status(400).end("Este personaje no se encuentra entre tus favoritos")
    }
}
const getcharacterId = async function (req, res) {
    const { id } = req.params
    try {
        const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const characterApi = result.data
        const character = {
            image: characterApi.image,
            name: characterApi.name,
            gender: characterApi.gender,
            species: characterApi.species,
            id: characterApi.id
        }
        res.status(200).end(JSON.stringify(character))
    } catch (error) {
        res.status(500).end("Character not found")
    }

}

const getDetailsId = async function (req, res) {
    const { detailId } = req.params
    try {
        const result = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const characterApi = result.data
        const character = {
            image: characterApi.image,
            name: characterApi.name,
            gender: characterApi.gender,
            species: characterApi.species,
            id: characterApi.id,
            status: characterApi.status,
            origin: characterApi.origin
        }
        res.status(200).end(JSON.stringify(character))
    } catch (error) {
        res.status(500).end("Character not found")
    }
}


module.exports = {
    getcharacterId,
    getDetailsId,
    getFav,
    postFav,
    deleteFav
}
const axios = require("axios");
const { character } = require("../DB_connection")

const getApiData = async () => {
    try {
        let allCharacters = []
        for (let i = 1; i < 6; i++) {
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
            const pageCharacters = apiData.data.results.map(ch => {
                return {
                    id: ch.id,
                    name: ch.name,
                    species: ch.species,
                    status: ch.status,
                    origin: ch.origin?.name,
                    gender: ch.gender,
                    image: ch.image
                }
            })
            allCharacters = [...allCharacters, ...pageCharacters]
        }
        console.log(allCharacters);
        return allCharacters;
    } catch (error) {
        return { msg: error.message }
    }
}

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData()
        await character.bulkCreate(allCharacters);
        return allCharacters;
    } catch (error) {
        return { msg: error.message }
    }
};

module.exports = saveApiData
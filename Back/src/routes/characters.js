const express = require ("express");
const router = express.Router();
const {getcharacterId, getDetailsId, getFav, postFav, deleteFav } = require ("../controllers/index")
const { character } = require ("../DB_connection")

router.get("/character/:id", getcharacterId)
router.get("/detail/:detailId", getDetailsId)
router.get("/fav", getFav)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

router.get("/all", async (req, res) => {
    try {
        const allCharacters  = await character.findAll();
        res.status(200).json(allCharacters);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})

module.exports = router;
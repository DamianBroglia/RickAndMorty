const express = require ("express");
const router = express.Router();
const {getcharacterId, getDetailsId, getFav, postFav, deleteFav } = require ("../controllers/index")

router.get("/character/:id", getcharacterId)
router.get("/detail/:detailId", getDetailsId)
router.get("/fav", getFav)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;
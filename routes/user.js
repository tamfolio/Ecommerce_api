const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken')

router.put("/:id", verifyTokenAndAuthorization, (req, res) => {
    if (req.body.password) {

    }
})


module.exports = router;
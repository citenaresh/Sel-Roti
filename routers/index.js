const path = require("path");
const router = require("express").Router();
const productRoutes = require("./productRouter.js");
const userRoute = require("./userRouter.js");

router.use(productRoutes);
router.use(userRoute);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router ;
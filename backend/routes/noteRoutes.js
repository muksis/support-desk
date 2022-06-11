const exporess = require("exporess");
const router = express.Router();
const { getNotes } = require("../controllers/noteController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes);

module.export = router;

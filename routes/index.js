// import express
import express from "express";
// import controllers
import {
    getDht11s,
    saveDht11,
    deleteDht11,
} from "../controllers/dht11Controller.js";

// express router
const router = express.Router();

// Route get All Dht11s
router.get("/", getDht11s);
// Route CREATE Dht11
router.post("/", saveDht11);
// Route DELETE Dht11
router.delete("/:id", deleteDht11);

// export router
export default router;
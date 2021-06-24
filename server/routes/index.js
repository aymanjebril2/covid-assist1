import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.post("/signup", controllers.createNewUser);

export default router;
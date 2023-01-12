import express from "express";
import DataCollection from "../database/schema/schema.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await DataCollection.find({});
    try {
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})



export default router
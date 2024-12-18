"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("hello from a server");
});
app.post("/", (req, res) => {
    const { data } = req.body;
    if (!data) {
        res.status(404).json({ message: "data not found" });
        return;
    }
    res.send(data);
});
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});

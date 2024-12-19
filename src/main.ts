import express, { Response, Request } from "express";
import { RequestBody } from "../src/types/reqBody";
import { APIerror } from "./errors/APIerror";
import "dotenv/config";
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("hello from a server");
});

app.post("/", (req: Request<{}, {}, RequestBody>, res: Response) => {
  try {
    const { data } = req.body;

    if (!data) {
      res.status(404).json({ message: "data not found" });
      return;
    }

    res.send(data);
  } catch (err) {
    console.error("error", (err as APIerror).stack);
    res
      .status(500)
      .json({ message: "server error", error: (err as APIerror).message });
  }
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

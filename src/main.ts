import express, { Response, Request } from "express";
import "dotenv/config";
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("hello from a server");
});

app.post("/", (req: Request, res: Response) => {
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

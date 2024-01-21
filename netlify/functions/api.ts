// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";


const { getUser } = require("../../octokit.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "../../frontend"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", { success: false, data: null });
});

app.post("/getUser", async (req, res) => {
  const userName = req.body.userName;
  const ans = await getUser(userName);

  if (ans.status === true) {
    return res.render("home", { success: true, data: ans.data });
  } else {
    return res.render("home", { success: false, data: "User Not found" });
  }
});

// app.listen(port, () => {
//   console.log(`app listening on port ${port} 🔥`);
// });

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/", router);

export const handler = serverless(app);

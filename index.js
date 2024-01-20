const express = require("express");
const { getUser } = require("./octokit");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/frontend"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", { data: null });
});

app.post("/getUser", async (req, res) => {
  const userName = req.body.userName;
  const ans = await getUser(userName);

  if (ans.status === true) {
    // console.log(ans.data);
    return res.render("home", { data: ans.data });
  } else {
    return res.render("home", { data: "User Not found" });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port} 🔥`);
});

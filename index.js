//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    next(); 
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", checkPassword, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
//form submission -> /check-> checkpassword miidleware -> next() it gives permission
// execute to res.send secreat file.
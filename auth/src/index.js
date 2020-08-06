const express = require("express");
const { port, host, db, authApiUrl } = require("./configuration");
const { connectDb } = require("./helpers/db");
const mongoose = require("mongoose");

const app = express();

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);

app.get("/test", (req, res) => {
  res.send("Our authentication server is working correctly");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started authentication service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`Database url ${db}`);
    console.log(`Auth Api URL ${authApiUrl}`);
    const silence = new Kitten({ name: "Silence" });
    silence.save(function (err, result) {
      if (err) return console.error(err);
      console.log("result", result);
    });
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);

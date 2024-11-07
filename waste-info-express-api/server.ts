import express from "express";
import type { Router } from "express";
import iwasteRouter from "./routes/iwaste";
import overpassRouter from "./routes/overpass";

var app = express();
const port = 8080; // WASTE but numbers i guess

app.use("/iwaste", iwasteRouter);
app.use("/overpass", overpassRouter);
var server = app.listen(port, function () {
  console.log("Example app listening at ", server.address());
});

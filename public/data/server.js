const express = require("express");
const fs = require("fs");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const filePath = path.join(__dirname, "public", "data", "ProfileData.json");

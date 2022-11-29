const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../changeme')));

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor local!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("Application started and Listening at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});




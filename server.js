// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const port = 8800;

app.use(express.json());

app.post("/v1/pushPackages/web.com.imagine.art", (request, response) => {
  // return the push package
  response.set("Content-Type", "application/zip");
  response.download(__dirname + "/assets/pushPackage.zip", "pushPackage.zip");
});

app.post("/v1/log", (request, response) => {
  // print the logs to the console
  console.log(request.body.logs);
  console.log(request.body);
  response.sendStatus(200);
});

app.post(
  "/v1/devices/*/registrations/web.com.imagine.art",
  (request, response) => {
    // capture requests to register or deregister the token
    response.sendStatus(200);
  }
);

// listen for requests :)
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + port);
});

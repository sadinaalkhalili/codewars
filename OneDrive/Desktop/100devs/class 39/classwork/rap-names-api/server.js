const express = require("express");
const app = express();
const PORT = 8000;
const rappers = {
  "21 savage": {
    birthName: "Sheya Bn Ibaraham Johnson",
    age: 21,
    birthLocation: "London,England",
  },
  "chance the rapper": {
    birthName: "Chancelor Benette",
    age: 29,
    birthLocation: "Chicago, Illinois",
  },
  unknown: {
    birthName: "unknown",
    age: 0,
    birthLocation: "unknown",
  },
};

app.get("/", (request, respose) => {
  respose.sendFile(__dirname + "/index.html");
});
app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName].birthName);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}, better go catch it !`);
});

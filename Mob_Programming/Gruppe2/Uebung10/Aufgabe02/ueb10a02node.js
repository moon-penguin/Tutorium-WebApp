const http = require("http");

const port = 8080;
const host = "127.0.0.1";

const calculateBmi = (weight, height) => {
  return weight / (height * height);
};

const handleGet = (req, res) => {
  const params = new URLSearchParams(req.url.substring(1));
  const bmi = calculateBmi(params.get("gewicht"), params.get("groesse"));
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<p>Dein BMI: ${bmi.toString()}</p>`);
  res.end();
};

const handlePost = (req, res) => {
  let bodyJson = "";
  req.on("data", (chunk) => {
    bodyJson += chunk;
  });
  req.on("end", () => {
    const bodyObject = JSON.parse(bodyJson);
    const bmi = calculateBmi(bodyObject.gewicht, bodyObject.groesse);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write(bmi.toString());
    res.end();
  });
};

const requestListener = (req, res) => {
  if (req.method === "GET") {
    handleGet(req, res);
  } else if (req.method === "POST") {
    handlePost(req, res);
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});

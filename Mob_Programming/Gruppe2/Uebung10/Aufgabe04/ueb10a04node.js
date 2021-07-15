const http = require("http");
const fs = require("fs");

const port = 8080;
const host = "127.0.0.1";

const regExName = /^[a-zA-ZöüäÖÜÄ]+(\s+[a-zA-ZöüäÖÜÄ]+)+$/i;
const regExXss = /<[\s\S]+?>[\s\S]*?<\/[\s\S]+?>/i;

const calculateBmi = (weight, height) => {
  return weight / (height * height);
};

const getSanitizedResponse = (user, remark) => {
  if (!regExName.test(user)) {
    return " Bitte Vor- und Nachname mit Leerzeichen getrennt angeben!";
  }
  if (regExXss.test(remark)) {
    return " Bitte keine tags im Textfeld!";
  }
  remark = remark.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `, Name: ${user}, Anmerkung: ${remark}`;
};

const saveToCsv = (body) => {
  const entry = `${body.user};${body.email};${body.gewicht};${body.groesse};${body.gender};${body.remark}\n`;
  fs.appendFile("userdata.csv", entry, (err) => {
    if (err) {
      throw err;
    }
    console.log(`New CSV entry: ${entry}`);
  });
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
    saveToCsv(bodyObject);
    const bmi = calculateBmi(bodyObject.gewicht, bodyObject.groesse);
    res.setHeader("Access-Control-Allow-Origin", "*");
    const response = `${bmi}${getSanitizedResponse(
      bodyObject.user,
      bodyObject.remark
    )}`;
    res.write(response);
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

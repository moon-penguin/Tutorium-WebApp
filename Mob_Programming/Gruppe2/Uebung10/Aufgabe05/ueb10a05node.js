const http = require("http");

const port = 8080;
const host = "127.0.0.1";

/**
 *
 * @param {number} celsius temperature in celsius
 * @returns {number} temperature in fahrenheit
 */
const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

const requestListener = (req, res) => {
  if (req.method === "GET") {
    const params = new URLSearchParams(req.url.substring(1));
    const fahrenheit = convertCelsiusToFahrenheit(
      parseFloat(params.get("celsius"))
    );
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    });
    res.write(fahrenheit.toString());
    res.end();
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});

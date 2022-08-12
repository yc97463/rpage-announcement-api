import fetch from "node-fetch";
import http from "http";

// Create a HTTP server
http.createServer(async function (req, res) {
  const rcg = 24;
  const url = "https://www.smhs.kh.edu.tw/app/index.php?Action=mobilercglist";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      Rcg: rcg,
      Op: "getpartlist",
      Page: 1,
    }),
  });
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.write(JSON.stringify(await response.json()));
  res.end();
}).listen(parseInt(process.env.PORT) || 8080);
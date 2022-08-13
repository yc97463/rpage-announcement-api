import fetch from "node-fetch";
import http from "http";
import url from "url";
// const url = import('url');

// Create a HTTP server
http.createServer(async function (req, res) {
  const queryObject = url.parse(req.url, true).query;
  const rcg = queryObject.rcg || 24;
  const host = queryObject.rcg || "https://www.smhs.kh.edu.tw/";
  // console.log(rcg);
  const ourl = host+"/app/index.php?Action=mobilercglist";
  const response = await fetch(ourl, {
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
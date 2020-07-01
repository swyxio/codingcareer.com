const data = require("@begin/data");
const begin = require("@architect/functions"); // Reads & writes session data

exports.handler = async function http(request) {
  // let session = await begin.http.session.read(request);
  // let key = request.headers.Cookie;
  let { visits } = await data.incr({
    table: "visits",
    key: "visits",
    prop: "visits", // : 0,
  });
  let sources;
  if (request.queryStringParameters && request.queryStringParameters.from) {
    sources = await data.incr({
      table: "visits",
      key: "sources",
      prop: request.queryStringParameters.from.replace(" ", "_"),
    });
  }
  // console.log(process.env);
  let ACAO = undefined;
  if (process.env.NODE_ENV === "testing") ACAO = "http://localhost:3000";
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json; charset=utf8",
      "Access-Control-Allow-Origin": ACAO,
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    body: JSON.stringify({
      visits,
      ...sources,
    }),
  };
};

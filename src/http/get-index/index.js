let arc = require('@architect/functions')

async function handler(req) {
  let params = {}
  let antiCache = 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
  if (req.path === '/index.css') {
    params.cacheControl = antiCache
  }
  let proxy = arc.proxy.public(params)
  return proxy(req)
}

exports.handler = arc.http.async(handler)

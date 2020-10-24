@app
begin-app

@static
folder __sapper__/export

@http
get /visits
post /hit
post /stripe

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@app
begin-app

@static
folder __sapper__/export

@http
get /visits
post /hit

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

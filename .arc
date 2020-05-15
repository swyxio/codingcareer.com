@app
begin-app

@static
folder __sapper__/export

@http
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

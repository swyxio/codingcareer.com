@app
begin-app

@static
folder __sapper__/export

@http

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

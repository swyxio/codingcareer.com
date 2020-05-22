@app
begin-app

@static
folder __sapper__/export

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@app
begin-app

@static
folder public

@http
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

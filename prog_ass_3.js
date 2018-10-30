Challenge 1

app.get(‘/algorithms’, (request, response) => response.send (“derived from a methematician’s name”))

Challenge 2

app.get('/zagster', (request, response) => {
  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  pool.query('SELECT * FROM rides ', (err, results) => {
    response.send(results.rows[0])
    pool.end()
  })
})



Challenge 3

app.get(‘/rides/count', (request, response) => {
  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  pool.query('SELECT COUNT (*) FROM rides ', (err, results) => {
    response.send(results.rows[0])
    pool.end()
  })
})




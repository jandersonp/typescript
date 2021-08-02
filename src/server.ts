import express from 'express'

const app = express()

app.get('/', (request, reponse) => {
  return reponse.json({ message: 'Hello Node.js' })
})

app.listen(3333, () => {
  console.log('✔ Server started on port 3333')
})

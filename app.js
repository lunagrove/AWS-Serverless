const express = require('express')
const app = express()

app.get("/", (req, res) => {
  console.log("GET /")
  res.send("<h1>Hello and Welcome!</h1>")
})

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "electric ⚡️",
    level: 99,
    image: "/pikachu.png"
  }
]

app.get("/api/pokemons", (req, res) => {
  console.log("GET /api/pokemons")
  res.send({pokemons: pokemons})
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  console.log("POST /api/pokemons", data)
  data.id = pokemons.length+1
  pokemons.push(data)
  res.send(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))

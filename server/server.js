import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const PORT = 3000

// __dirname fix für ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

// -------------------
// API ROUTES
// -------------------

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo von Express API" })
})


// -------------------
// PRODUCTION: React ausliefern
// -------------------

if (process.env.NODE_ENV === "production") {

  const distPath = path.join(__dirname, "../dist")

  // static files (JS, CSS, assets)
  app.use(express.static(distPath))

  // React Router fallback
  app.get((req, res) => {
    res.sendFile(path.join(distPath, "index.html"))
  })
}


// -------------------

app.listen(PORT, () => {
  console.log("Server läuft auf:", PORT)
  console.log("ENV:", process.env.NODE_ENV)
})
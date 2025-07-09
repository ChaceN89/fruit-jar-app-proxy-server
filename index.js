import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

const API_URL = process.env.FRUITS_API_PATH
const API_KEY = process.env.FRUITS_API_KEY

if (!API_URL || !API_KEY) {
  console.error('❌ Missing environment variables.')
  process.exit(1)
}

app.get('/', (req, res) => {
  res.send('Welcome to the Fruit Jar App Proxy Server!')
})

app.get('/api/fruits', async (req, res) => {
  try {
    const response = await fetch(API_URL, {
      headers: { 'x-api-key': API_KEY, 'Origin': 'http://localhost:5173' },
    })
    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Proxy failed', message: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`)
})

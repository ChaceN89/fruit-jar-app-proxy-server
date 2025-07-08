import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const FRUITS_API_PATH = process.env.FRUITS_API_PATH
const FRUITS_API_KEY = process.env.FRUITS_API_KEY

if (!FRUITS_API_PATH || !FRUITS_API_KEY) {
  console.error('❌ Missing environment variables.')
  process.exit(1)
}

app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to the Fruit Jar App Proxy Server!')
})

app.get('/api/fruits', async (req, res) => {
  try {
    const response = await fetch(FRUITS_API_PATH, {
      headers: {
        'x-api-key': FRUITS_API_KEY
      }
    })

    const data = await response.json()
    res.status(response.status).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})

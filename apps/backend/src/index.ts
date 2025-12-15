import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { UserDto } from '@repo/domain/dto/user.dto.js'
import api from './api/index.js'

const app = new Hono()

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

//register middle ware
app.onError((err, c) => {
  console.error("Error caught:", err)
  return c.json({ error: err.message }, 500)
})


//register routes
app.route('/api',api)

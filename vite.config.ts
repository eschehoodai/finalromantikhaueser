import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { spawn } from 'child_process'

/**
 * Vite Dev-Plugin zur Ausführung von sendmail.php bei lokalen Tests
 */
function phpDevMiddleware(): Plugin {
  return {
    name: 'php-dev-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sendmail.php' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            const php = spawn('php', ['public/sendmail.php'], {
              env: {
                ...process.env,
                REQUEST_METHOD: 'POST',
                CONTENT_TYPE: req.headers['content-type'] || 'application/json',
                HTTP_HOST: req.headers.host || 'localhost:5177',
                REMOTE_ADDR: req.socket.remoteAddress || '127.0.0.1',
              },
            })

            let stdout = ''
            let stderr = ''
            php.stdout.on('data', data => {
              stdout += data.toString()
            })
            php.stderr.on('data', data => {
              stderr += data.toString()
            })

            php.on('close', code => {
              res.setHeader('Content-Type', 'application/json; charset=utf-8')
              const jsonIndex = stdout.indexOf('{')
              if (jsonIndex !== -1) {
                res.statusCode = 200
                res.end(stdout.slice(jsonIndex))
              } else {
                res.statusCode = code === 0 ? 200 : 500
                res.end(JSON.stringify({ success: false, error: stderr || 'PHP Error' }))
              }
            })

            php.stdin.write(body)
            php.stdin.end()
          })
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), phpDevMiddleware()],
  server: {
    port: 5177,
    strictPort: true,
  },
})

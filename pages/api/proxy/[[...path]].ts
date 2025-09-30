import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const target = 'https://lmarena.ai'
  req.headers.host = 'lmarena.ai'

  if (req.headers.upgrade && req.headers.upgrade.toLowerCase() === 'websocket') {
    proxy.ws(req, res.socket, req, { target, changeOrigin: true })
    return
  }

  proxy.web(req, res, {
    target,
    changeOrigin: true,
    selfHandleResponse: false,
  })

  proxy.on('error', (err) => {
    res.status(500).json({ error: 'Proxy error', details: err.message })
  })
}

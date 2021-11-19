import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'method not supported' })
  }

  const cookies = new Cookies(req, res)
  cookies.set('access_token')

  res.status(200).json({ message: 'Logout successfully' })
}

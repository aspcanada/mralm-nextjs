// import { withApiAuthRequired } from "@auth0/nextjs-auth0"
import { NextApiRequest, NextApiResponse } from 'next';

const apiDomain = process.env.REACT_APP_API_BASE_URL!

export default function commonHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try {

    switch (method) {
      case 'GET':
        return handleGet(req, res);
      case 'POST':
      case 'PUT':
      case 'DELETE':
        return handlePut(req, res);
      default:
        res.status(405).end(`Method ${method} not allowed`);
        break;
    }

  } catch (err: any) {
    console.error(err)
    res.status(500).end("Internal server error")
  }
}
// export default withApiAuthRequired(commonHandler)

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  // handle GET requests
  const resp = await fetch(apiDomain + req.url) // includes query string
  const data = await resp.json()
  res.status(resp.status).json(data)
}

// async function handlePost(req: NextApiRequest, res: NextApiResponse) {
//   // handle POST requests
//   return handlePut(req, res)
// }

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  // handle PUT requests
  const resp = await fetch(apiDomain + req.url, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  const data = await resp.json()
  res.status(resp.status).json(data)
}

// async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
//   // handle DELETE requests
//   return handlePut(req, res)
// }
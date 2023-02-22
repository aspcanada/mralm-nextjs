// import { withApiAuthRequired } from "@auth0/nextjs-auth0"

const apiDomain = "http://localhost:8081"

async function commonHandler(req, res) {
  try {
    const resp = await fetch(apiDomain + req.url) // includes query string
    const data = await resp.json()
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default commonHandler
// export default withApiAuthRequired(commonHandler)

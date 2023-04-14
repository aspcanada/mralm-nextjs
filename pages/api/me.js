import commonHandler from "./common"
import handler from "./members/[id]"

const id = "457dcbfa-3fe3-4a32-a060-0b8a8473748f"

export default function meHandler(req, res) {
  req.url = req.url.replace("/api/me", `/api/members/${id}`)
  return handler(req, res)
}

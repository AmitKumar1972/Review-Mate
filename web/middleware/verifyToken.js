// middleware/verifyToken.js
import decodeJWT from "../utils/decodeJWT.js";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const decoded = decodeJWT(token);

  if (!decoded) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.locals.shopify = { session: { sessionId: decoded.sid } };
  next();
};

export default verifyToken;
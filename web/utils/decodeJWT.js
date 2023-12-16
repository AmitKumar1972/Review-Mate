// utils/decodeJWT.js
import jwt from "jsonwebtoken";

const decodeJWT = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SHOPIFY_APP_API_SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};

export default decodeJWT;
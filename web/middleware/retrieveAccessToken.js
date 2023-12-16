// middleware/retrieveAccessToken.js
const retrieveAccessToken = async (req, res, next) => {
    const sessionId = res.locals.shopify.session.sessionId;
    const session = await shopify.sessionStorage.loadSession(sessionId);
  
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    res.locals.shopify.session.accessToken = session.accessToken;
    next();
  };
  
  export default retrieveAccessToken;
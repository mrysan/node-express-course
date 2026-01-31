const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: decoded.name };
    next();
  } catch (error) {
    // note:  Does NOT proceed to controller function (since there is an arg), express handles it as an error
    next(error);
  }
};

module.exports = authenticationMiddleware;

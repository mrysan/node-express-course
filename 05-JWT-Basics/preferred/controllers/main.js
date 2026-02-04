const jwt = require("jsonwebtoken");

const logon = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res
        .status(400)
        .json({ msg: "Bad Request: No Username or Password Provided" });
    }
    const token = jwt.sign({ name: name }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

const hello = async (req, res, next) => {
  const name = req.user.name;
  res.status(200).json({ message: `Hello, ${name}!` });
};

module.exports = { logon, hello };

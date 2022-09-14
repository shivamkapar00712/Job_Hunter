const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
module.exports = function (req, res, next) {
  const token = req.header("authorization").split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex)  {
    res.send(ex);
    console.log(ex);
    process.exit();
  }
};

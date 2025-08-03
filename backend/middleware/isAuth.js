
import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    // Ensure cookies are parsed
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "User doesn't have a token" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("isAuth error:", error);
    return res.status(500).json({ message: `isAuth error: ${error.message}` });
  }
};

export default isAuth;

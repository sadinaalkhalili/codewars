import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }

    req.user = { id: decoded.id }; // ✅ attach user ID

    console.log("✅ Middleware user:", req.user); // ✅ useful debug log

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;

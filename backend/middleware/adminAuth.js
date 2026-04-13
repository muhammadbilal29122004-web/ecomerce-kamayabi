import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const adminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const adminPassword = (process.env.ADMIN_PASSWORD || "").trim();
    const jwtSecret = (process.env.JWT_SECRET || "").trim();

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }
    if (!adminEmail || !adminPassword) {
      return res.status(500).json({
        success: false,
        message: "Admin credentials are not configured on server",
      });
    }
    if (!jwtSecret) {
      return res.status(500).json({
        success: false,
        message: "JWT_SECRET is not configured on server",
      });
    }

    const decodedToken = jwt.verify(token, jwtSecret);

    if (decodedToken !== adminEmail + adminPassword) {
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }

    next();
  } catch (error) {
    console.log("Error while authenticating admin: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;

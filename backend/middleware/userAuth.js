import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized. Please login again." });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedToken.id;

    next();
  } catch (error) {
    console.log("Error while authenticating user: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default userAuth;

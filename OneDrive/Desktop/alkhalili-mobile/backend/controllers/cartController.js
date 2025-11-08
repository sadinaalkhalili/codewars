// controllers/cartController.js
import User from "../models/User.js";

export const updateCart = async (req, res) => {
  try {
    console.log("🔥 req.user:", req.user);
    console.log("🛒 req.body:", req.body);

    const userId = req.user.id; // ✅ from middleware
    const { cartItems } = req.body; // ✅ only cartItems comes from frontend

    if (!cartItems) {
      return res
        .status(400)
        .json({ success: false, message: "No cart data provided" });
    }

    await User.findByIdAndUpdate(userId, { cartItems });

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log("Update cart error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

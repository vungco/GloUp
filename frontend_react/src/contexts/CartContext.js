import { createContext, useContext, useState } from "react";
import cartApi from "../api/cartApi"; // hoặc nơi bạn get cart

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = async () => {
    try {
      const response = await cartApi.getByIdUser(); // Gọi API lấy giỏ
      const totalItems = response.data.length; // hoặc tùy cấu trúc
      setCartCount(totalItems);
    } catch (error) {
      console.error("Failed to fetch cart count", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook dùng cho tiện
export const useCart = () => useContext(CartContext);

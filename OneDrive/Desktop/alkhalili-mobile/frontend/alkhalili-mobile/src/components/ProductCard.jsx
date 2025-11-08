import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="
          bg-white 
          border border-gray-200 
          rounded-2xl 
          overflow-hidden 
          cursor-pointer 
          hover:shadow-lg 
          transition-all 
          duration-300 
          w-full 
          max-w-[350px]
          flex flex-col
        "
      >
        {/* Image Section */}
        <div className="flex items-center justify-center bg-[#F4F5F7] p-6">
          <img
            className="transition-transform duration-300 group-hover:scale-105 max-h-44 object-contain"
            src={product.image[0]}
            alt={product.name}
          />
        </div>

        {/* Content Section */}
        <div className="p-4 text-gray-700">
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="font-semibold text-lg text-[#1A284E] truncate">
            {product.name}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="w-4"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star"
                />
              ))}
            <span className="text-sm text-gray-500">(4)</span>
          </div>

          {/* Price and Button */}
          <div className="flex items-end justify-between mt-3">
            <p className="text-lg font-medium text-[#1E73BE]">
              {currency}
              {product.offerPrice}{" "}
              <span className="text-gray-400 text-sm line-through">
                {currency}
                {product.price}
              </span>
            </p>

            <div
              onClick={(e) => e.stopPropagation()}
              className="text-[#1E73BE]"
            >
              {!cartItems[product._id] ? (
                <button
                  className="
                    flex items-center justify-center gap-1
                    bg-[#F5B800]/10 
                    border border-[#F5B800]/40 
                    text-[#1A284E]
                    font-medium
                    px-3 py-1.5
                    rounded-lg
                    hover:bg-[#F5B800]/20
                    transition-all
                    duration-200
                  "
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} alt="cart_icon" className="w-4" />
                  Add
                </button>
              ) : (
                <div
                  className="
                    flex items-center justify-center gap-2 
                    bg-[#F5B800]/20 
                    rounded-lg 
                    select-none 
                    px-3 py-1.5
                  "
                >
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-lg text-[#1A284E]"
                  >
                    -
                  </button>
                  <span className="text-[#1A284E] font-medium">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-lg text-[#1A284E]"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;

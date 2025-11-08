import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="
              group cursor-pointer flex flex-col justify-center items-center
              rounded-2xl overflow-hidden shadow-sm 
              aspect-square md:aspect-[1/2]   /* taller on web */
              transition-transform duration-300 hover:scale-[1.02] border border-[#E5E8EC]
            "
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-sm md:text-base font-medium mt-2 text-center">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { formatMoney } from "../lib/formatMoney";
import AddToCartBtn from "./AddToCartBtn";

const Product = ({ data }) => {
    const { color, image, name, description, price } = data;

    return (
        <div className="py-10 first:py-0">
            <div style={{ backgroundColor: color }} className="item-image">
                <img src={image} alt={name} />
            </div>
            <div className="mt-26px mb-5 font-bold text-xl">{name}</div>
            <div className="mb-5 text-sm text-gray-500 leading-1.8">
                {description}
            </div>
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">${formatMoney(price)}</div>
                <AddToCartBtn data={data} />
            </div>
        </div>
    );
};

export default Product;

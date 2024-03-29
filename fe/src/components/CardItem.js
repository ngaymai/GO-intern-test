import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { formatMoney } from "../lib/formatMoney";
import { useMutation } from "react-query";
import { baseURL } from "../lib/baseURL";

const CartItem = ({ data }) => {
    const { mutate } = useMutation({
        mutationFn: (quantity) => baseURL({
            method: "post",
            url: "/add-to-cart",
            data: {
                id: data.id,
                quantity
            },
            headers: { "Content-Type": "multipart/form-data" },
        }),
        onSuccess({ data }) {
            // Handle success if needed
        }
    });

    const [cartItems, setCartItems] = useLocalStorage('cart', []);
    const index = cartItems.findIndex(item => item.id === data.id);

    const updateQuantity = (q) => {
        const newQuantity = Math.max(cartItems[index]?.quantity + q, 0);

        if (newQuantity === 0) {
            setCartItems([
                ...cartItems.slice(0, index),
                ...cartItems.slice(index + 1),
            ]);
        } else {
            setCartItems([
                ...cartItems.slice(0, index),
                { ...data, quantity: newQuantity },
                ...cartItems.slice(index + 1),
            ]);
        }

        mutate(newQuantity);
    };

    return (
        <div className="flex items-start py-5">
            <div className="w-[90px] h-[90px] mr-[34px] rounded-full flex-shrink-0" style={{ backgroundColor: data.color }}>
                <div className="block">
                    <img
                        style={{
                            transform: "rotate(-28deg) translateY(-40px)",
                            filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))"
                        }}
                        src={data.image}
                        className="w-[140%] block max-w-[140%]"
                        alt={data.name}
                    />
                </div>
            </div>
            <div className="w-full">
                <div className="cart-item-name">{data.name}</div>
                <div className="cart-item-price">${formatMoney(data.price)}</div>
                <div className="flex justify-between">
                    <div className="flex items-center justify-between">
                        <button onClick={() => updateQuantity(-1)} className="flex items-center w-7 h-7 justify-center font-extrabold rounded-full bg-gray-100 hover:bg-gray-200">
                            -
                        </button>
                        <div className="mx-3">{data.quantity}</div>
                        <button onClick={() => updateQuantity(1)} className="flex items-center w-7 h-7 justify-center font-extrabold rounded-full bg-gray-100 hover:bg-gray-200">
                            +
                        </button>
                    </div>
                    <button onClick={() => updateQuantity(-cartItems[index]?.quantity)} className="w-7 h-7 flex items-center justify-center bg-[#f6c90e] rounded-full">
                        <img src="/trash.png" className="w-4 h-4" alt="Delete" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

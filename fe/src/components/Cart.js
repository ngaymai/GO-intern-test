import React from "react";
import { useReadLocalStorage } from "usehooks-ts";
import CartItem from "./CardItem";
import { formatMoney } from '../lib/formatMoney';

const Cart = () => {
    const cartItems = useReadLocalStorage('cart', []);
    const total = cartItems.reduce((acc, { price, quantity }) => acc + (+price * quantity), 0);

    return (
        <div className="card">
            <img src="nike.png" className="w-[50px] my-3 z-10 relative" alt="Logo" />
            <div className="flex justify-between items-center">
                <div className="text-[24px] font-bold relative my-4">Your cart</div>
                <div className="text-[24px] font-bold relative my-4">${formatMoney(total)}</div>
            </div>
            <div className="card-body relative">
                <ul className="pb-8">
                    <div className={`my-5 text-sm font-thin ${cartItems.length === 0 ? 'hidden last:block' : ''}`}>
                        <p>Your cart is empty.</p>
                    </div>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <CartItem data={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cart;

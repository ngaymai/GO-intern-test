import { useMutation } from "react-query"
import { baseURL } from "../lib/baseURL"
import { useLocalStorage } from "usehooks-ts";

export function AddToCartBtn({ data }) {
    const [cartItems, setCartItems] = useLocalStorage('cart', [])
    const index = cartItems.findIndex(item => item.id === data.id);

    const { mutate, isLoading } = useMutation({
        mutationFn: () => baseURL({
            method: "post",
            url: "/add-to-cart",
            data: {
                id: data.id,
                quantity: 1
            },
            headers: { "Content-Type": "multipart/form-data" },
        }),
        onSuccess(data) {
        }
    })
    function addItem() {
        if (index == -1) {
            setCartItems([...cartItems, { ...data, quantity: 1 }])
            mutate();
        }
    }
    return (
        <button className="add-to-cart-btn relative" onClick={addItem} style={{ cursor: index == -1 ? 'pointer' : 'default', width: index == -1 ? 'auto' : '46px' }}>
            {
                index == -1 ? <p className="uppercase">add to cart</p> : <img src="/check.png" className="w-5 shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            }

        </button>
    )
}
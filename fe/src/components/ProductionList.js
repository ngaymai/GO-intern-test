import { baseURL } from "../lib/baseURL";
import { useQuery } from "react-query";
import Product from "./Product";

export const ProductionList = () => {
    const { data, isLoading } = useQuery("product", () => baseURL.get("/get-product?id=all"));

    if (isLoading || !data?.data) {
        return null;
    }

    const { product } = data.data;

    return (
        <div className="card">
            <img src="/nike.png" className="w-[50px] my-3 z-10 relative" alt="Logo" />
            <div className="text-[24px] font-bold relative my-4">Our Products</div>
            <div className="card-body relative">
                {product.map((prod) => (
                    <Product key={prod.id} data={prod} />
                ))}
            </div>
        </div>
    );
};

import { baseURL } from "../lib/baseURL";
import { useQuery } from "react-query";
import { Product } from "./Product";

export const ProductionList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: () => baseURL.get("/get-product?id=all"),
    });
    if (!isLoading && data.data) {
        return (
            <div className="card">

                <img src="/nike.png" className="w-[50px] my-3 z-10 relative" />
                <div className="text-[24px] font-bold relative my-4">Our Products</div>
                <div className="card-body relative">
                    {data.data.product.map((prod) => {
                        return <Product data={prod} />;
                    })}
                </div>
            </div>
        );
    }
    return null;
};

import { addToBuild } from "@/redux/pcBuilderSlice";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const ProductCard = ({ product, category }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleAddToBuild = (category, product) => {
        dispatch(addToBuild({ [category]: product }));
        router.push("/pc-builder/");
    };
    return (
        <div className="flex flex-col max-w-7xl mx-auto items-start justify-center w-[100%] bg-white my-10 shadow-lg px-5">
            <div className="flex flex-col md:flex-row items-center justify-center lg:space-x-16">
                <div className="w-1/2 md:w-1/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={product?.image}
                        alt="Product Image"
                        className=""
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between lg:w-[100%] space-y-3 py-10">
                    <div className="md:w-[30rem]">
                        <h1 className="text-xl font-semibold">
                            {product?.name}
                        </h1>
                        <div className="flex flex-col justify-between items-start">
                            <p className="text-lg font-semibold text-gray-500">
                                {product?.category}
                            </p>
                            <p className="md:text-base">
                                Rating:{" "}
                                <span className="font-semibold">
                                    {product?.average_rating}
                                </span>
                            </p>
                            <p className="md:text-base py-1">
                                <span className="font-semibold">
                                    {product?.status}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-base md:text-right">
                            <span className="font-semibold md:text-2xl">
                                {" "}
                                {product?.price}
                            </span>
                        </p>
                        <Button
                            type="primary"
                            onClick={() => {
                                handleAddToBuild(category, product?.name);
                            }}
                        >
                            Add to Build
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

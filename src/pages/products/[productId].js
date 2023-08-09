import RootLayout from "@/components/layouts/RootLayout";

const ProductDetail = ({ product }) => {
    const capitalizeWords = (string) => {
        return string.replace(/_/g, " ").replace(/(^|\s)\S/g, function (match) {
            return match.toUpperCase();
        });
    };
    return (
        <div className="flex flex-col max-w-7xl mx-auto items-start justify-center w-[100%] bg-white my-10 shadow-lg px-5">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
                <div className=" xl:w-[40%]">
                    {/* <Image
                        src={product?.image}
                        width={350}
                        height={350}
                        responsive
                        alt="product image"
                        className="p-6"
                    /> */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product?.image} alt="Product Image" className="" />
                </div>
                <div className="lg:w-[50%] space-y-3 py-10">
                    <h1 className="text-xl md:text-3xl font-semibold">
                        {product?.name}
                    </h1>
                    <div className="flex justify-between items-center my-2">
                        <p className="text-lg md:text-2xl font-semibold text-gray-500">
                            {" "}
                            {product?.category}
                        </p>
                        <p className="font-semibold"> {product?.status}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div className="flex flex-col justify-between items-start my-2">
                            <p className="md:text-base">
                                Avearge Rating:{" "}
                                <span className="font-semibold">
                                    {product?.average_rating}
                                </span>
                            </p>
                            <p className="md:text-base">
                                Individual Rating:{" "}
                                <span className="font-semibold">
                                    {product?.average_rating}
                                </span>
                            </p>
                        </div>
                        <p className="text-base md:text-right">
                            <span className="font-semibold md:text-2xl">
                                {" "}
                                {product?.price}
                            </span>
                        </p>
                    </div>

                    <p className="md:text-lg">{product?.description}</p>
                    <h1 className="text-lg md:text-2xl font-semibold pt-4">
                        Features
                    </h1>
                    <ul className="space-y-1 md:text-lg">
                        {Object.keys(product?.features).map((feature) => (
                            <li key={feature}>
                                <span className="font-semibold text-gray-500">
                                    {capitalizeWords(feature)}
                                </span>
                                :{" "}
                                <span className="text-base">
                                    {product?.features[feature]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lg:ml-10">
                <h1 className="text-lg md:text-2xl font-semibold">Reviews</h1>
                <ul className="space-y-1 py-3 mb-8">
                    {product?.reviews?.map((review, index) => (
                        <li key={review}>
                            {index + 1}. {review}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(
        `http://localhost:5000/products/${params.productId}`
    );
    const data = await res.json();
    return {
        props: {
            product: data,
        },
        // revalidate: 5,
    };
};

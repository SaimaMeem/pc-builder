import ProductCard from "@/components/UI/PCBuilder/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { Row } from "antd";

const Category = ({ filteredProducts, category }) => {
    console.log(category);
    return (
        <>
            <h1 className="text-3xl font-semibold text-center mt-10">
                {category}
            </h1>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
                className="pb-6 md:px-10"
            >
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>
                ))}
            </Row>
        </>
    );
};

export default Category;

Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/products/`);
    const data = await res.json();
    const filteredData = data.filter((product) =>
        product.category.toLowerCase().includes(params.pcBuilderSlug[0])
    );
    return {
        props: {
            filteredProducts: filteredData,
            category: filteredData[0].category,
        },
        // revalidate: 5,
    };
};

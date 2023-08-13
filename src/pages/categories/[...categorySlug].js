import ProductCard from "@/components/UI/PCBuilder/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { Row } from "antd";
function convertToSpaceSeparated(input) {
    return input.replace(/-/g, " ");
}
const Category = ({ filteredProducts, category }) => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-center mt-10">
                {/* {filteredProducts[0]?.category} */}
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
                        category={category}
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
    const res = await fetch(`${process.env.SERVER_URL}/products/`);
    const data = await res.json();
    const filteredData = data.data.filter((product) =>
        product.category
            .toLowerCase()
            .includes(convertToSpaceSeparated(params.categorySlug[0]))
    );
    return {
        props: {
            filteredProducts: filteredData,
            // category: params.categorySlug[0],
            category: filteredData[0].category,
        },
        // revalidate: 5,
    };
};

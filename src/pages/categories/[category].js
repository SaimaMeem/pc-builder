import ProductCard from "@/components/UI/home/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { Row } from "antd";

const Category = ({ filteredProducts }) => {
    return (
        <Row
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}
            className="py-6 md:px-10"
        >
            {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </Row>
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
    const filteredData = data?.data.filter((product) =>
        product.category.toLowerCase().includes(params.category.replace(/-/g, ' '))
    );
    return {
        props: {
            filteredProducts: filteredData,
        },
        // revalidate: 5,
    };
};

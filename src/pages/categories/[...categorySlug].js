import Product from "@/components/UI/Product";
import RootLayout from "@/components/layouts/RootLayout";
import { Row } from "antd";

const Category = ({ filteredProducts }) => {
    console.log(filteredProducts);
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
                <Product key={product.id} product={product}></Product>
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
    const res = await fetch(`http://localhost:5000/products/`);
    const data = await res.json();
    const filteredData = data.filter((product) =>
        product.category.toLowerCase().includes(params.categorySlug[0])
    );
    return {
        props: {
            filteredProducts: filteredData,
        },
        // revalidate: 5,
    };
};

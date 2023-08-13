import { Card, Row } from "antd";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
    const { Meta } = Card;
    return (
        <>
            <h1 className="font-semibold text-3xl text-center mt-5 pt-5">
                Featured Products
            </h1>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
                className="py-6 md:px-10"
            >
                {products.slice(15).map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </Row>
        </>
    );
};

export default Products;

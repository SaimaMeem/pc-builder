import { Card, Row } from "antd";
import Product from "./Product";

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
                    <Product key={product.id} product={product}></Product>
                ))}
            </Row>
        </>
    );
};

export default Products;

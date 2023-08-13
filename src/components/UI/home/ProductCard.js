import { Button, Card, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ product }) => {
    const { Meta } = Card;
    return (
        <Col
            key={product._id}
            className="gutter-row py-5"
            span={6}
            xs={24}
            md={12}
            lg={8}
            xl={6}
        >
            <Card
                className="shadow-md"
                hoverable
                cover={
                    <Image
                        src={product?.image}
                        width={350}
                        height={350}
                        layout="responsive"
                        alt="product image"
                        className="p-6"
                    />
                }
            >
                <Meta title={product?.name} />
                <div className="flex justify-between items-center my-2">
                    <p className="text-base text-gray-500">
                        {" "}
                        {product?.category}
                    </p>
                    <p className="font-semibold"> {product?.status}</p>
                </div>
                <p style={{ fontSize: "15px" }}>
                    <span className="font-semibold">Rating:</span>{" "}
                    {product?.average_rating}
                </p>
                <p className="text-base text-right">
                    <span className="font-semibold text-2xl">
                        {" "}
                        {product?.price}
                    </span>
                </p>
                <Link href={`/products/${product?._id}`}>
                    <Button type="primary" className="mt-6">
                        View Details
                    </Button>
                </Link>
            </Card>
        </Col>
    );
};

export default ProductCard;

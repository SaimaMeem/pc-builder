import ProductDetail from "@/components/UI/home/ProductDetail";
import RootLayout from "@/components/layouts/RootLayout";

const Product = ({ product }) => {
    return <ProductDetail product={product}></ProductDetail>;
};

export default Product;

Product.getLayout = function getLayout(page) {
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
